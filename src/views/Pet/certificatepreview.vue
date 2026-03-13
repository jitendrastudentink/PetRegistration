<template>
  <div v-if="showModal" class="cert-overlay" @click.self="closeCertificateModal">
    <div class="cert-dialog">

      <!-- Top Bar -->
      <div class="cert-topbar">
        <span>Pet Animal License – Preview</span>
        <button class="cert-close-btn" @click="closeCertificateModal">✕</button>
      </div>

      <!-- Body -->
      <div class="cert-body">

        <!-- Loading -->
        <div v-if="loading" class="cert-state-wrap">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-3 text-muted">Loading certificate...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="cert-state-wrap">
          <i class="ki-duotone ki-cross-circle fs-2x text-danger mb-2">
            <span class="path1"></span><span class="path2"></span>
          </i>
          <p class="text-danger mb-3">{{ error }}</p>
          <button class="btn btn-sm btn-light-danger" @click="closeCertificateModal">Close</button>
        </div>

        <!-- Certificate Page -->
        <div v-else-if="certificateData" class="cert-page">

          <!-- HEADER -->
          <div class="cert-header">
            <div class="cert-logo-cell">
              <img src="/public/Tambaram_Corporation_new_logo.jpg" alt="Logo" class="cert-logo" />
            </div>
            <div class="cert-title-cell">
              <div class="cert-corp">Avadi City Municipal Corporation</div>
              <div class="cert-dept">Public Health Department</div>
              <div class="cert-doc">PET ANIMAL LICENSE</div>
            </div>
            <div class="cert-qr-cell">
              <div class="cert-qr-box">QR</div>
            </div>
          </div>

          <!-- License Number + Status -->
          <div class="cert-license-line">
            <span class="cert-lbl">License Number:</span>
            <span class="cert-license-no">{{ certificateData.certificate_number }}</span>
            <!-- <span class="cert-status-pill" :class="statusClass">{{ certificateData.registration_status }}</span> -->
          </div>

          <!-- Certify Para -->
          <p class="cert-certify-para">
            This is to certify that the Pet License certificate is issued based on the details submitted
            by the applicant through the ACMC Pet Licence portal.
          </p>

          <!-- MAIN TABLE -->
          <table class="cert-table">
            <thead>
              <tr>
                <th class="cert-th">
                  <span class="cert-th-title">Owner Details</span>
                  <div class="cert-photo-box">Pet Owner Photo</div>
                </th>
                <th class="cert-th">
                  <span class="cert-th-title">Pet Animal Details</span>
                  <div class="cert-photo-box">Pet Animal Photo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cert-td">
                  <span class="cert-td-lbl">Pet Owner Name:</span>
                  <span class="cert-td-val">{{ certificateData.owner_details?.name || '—' }}</span>
                </td>
                <td class="cert-td">
                  <span class="cert-td-lbl">Pet Name:</span>
                  <span class="cert-td-val">{{ certificateData.pet_details?.name || '—' }}</span>
                </td>
              </tr>
              <tr>
                <td class="cert-td">
                  <span class="cert-td-lbl">Address:</span>
                  <span class="cert-td-val">{{ certificateData.owner_details?.address || '—' }}</span>
                </td>
                <td class="cert-td">
                  <span class="cert-td-lbl">Species:</span>
                  <span class="cert-td-val">{{ certificateData.pet_details?.species || '—' }}</span>
                </td>
              </tr>
              <tr>
                <td class="cert-td">
                  <span class="cert-td-lbl">Phone Number:</span>
                  <span class="cert-td-val">{{ certificateData.owner_details?.mobile || '—' }}</span>
                </td>
                <td class="cert-td">
                  <span class="cert-td-lbl">Breed:</span>
                  <span class="cert-td-val">{{ certificateData.pet_details?.breed || '—' }}</span>
                </td>
              </tr>
              <tr>
                <td class="cert-td">
                  <span class="cert-td-lbl">Zone:</span>
                  <span class="cert-td-val">{{ certificateData.owner_details?.zone || '—' }}</span>
                </td>
                <td class="cert-td">
                  <span class="cert-td-lbl">Colour:</span>
                  <span class="cert-td-val">{{ certificateData.pet_details?.color || '—' }}</span>
                </td>
              </tr>
              <tr>
                <td class="cert-td">
                  <span class="cert-td-lbl">Ward:</span>
                  <span class="cert-td-val">{{ certificateData.owner_details?.ward || '—' }}</span>
                </td>
                <td class="cert-td">
                  <span class="cert-td-lbl">Gender:</span>
                  <span class="cert-td-val">{{ certificateData.pet_details?.sex || '—' }}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- BOTTOM INFO ROW -->
          <div class="cert-info-row">
            <div class="cert-info-col">
              <div class="cert-info-line">
                <span class="cert-lbl">Sterilization status:</span>
                <span class="cert-val">{{ certificateData.pet_details?.sterilized || '—' }}</span>
              </div>
              <div class="cert-info-line">
                <span class="cert-lbl">Date of ARV Vaccination:</span>
                <span class="cert-val">{{ certificateData.vaccination_details?.last_vaccination_date || '—' }}</span>
              </div>
            </div>
            <div class="cert-info-col">
              <div class="cert-info-line">
                <span class="cert-lbl">Issued On:</span>
                <span class="cert-val">{{ certificateData.issue_date || '—' }}</span>
              </div>
              <div class="cert-info-line">
                <span class="cert-lbl">Expires On:</span>
                <span class="cert-val">{{ certificateData.valid_till || '—' }}</span>
              </div>
              <div class="cert-info-line">
                <span class="cert-lbl">Address Proof:</span>
                <span class="cert-val">Submitted</span>
              </div>
            </div>
          </div>

          <!-- DUTIES -->
          <div class="cert-duties">
            <div class="cert-duties-heading">Duties and Responsibilities of Pet Owner:</div>
            <ol class="cert-duties-ol">
              <li>The pet owner is responsible for the controlled breeding, immunization, neutering, and licensing of the pet.</li>
              <li>The pet must always be under owner control when in public places.</li>
              <li>The owner should ensure proper disposal of pet waste in a hygienic manner.</li>
              <li>Pets should not create a nuisance or pose a health hazard to neighbourhood.</li>
              <li>Pet owners must ensure their pets are leashed and muzzled when taken out in public places.</li>
            </ol>
          </div>

          <!-- NOTE -->
          <p class="cert-note">
            <strong>Note:</strong> This license is applicable and valid only for residents within Avadi City
            Municipal Corporation limits. This Pet License certificate is issued based on the details submitted
            by the applicant through the ACMC Pet Licence portal.
          </p>
          <p class="cert-computer-note">
            This is a computer-generated license and does not require any physical signature.
          </p>

          <!-- SIGNATURE -->
          <div class="cert-signature">
            <div class="cert-sign-left">
              <div class="cert-sign-title">Signature</div>
              <img
                src="https://octopods3.s3.ap-south-1.amazonaws.com/placeholder/Avadi-cho-digital-sign.png"
                alt="Digital Signature"
                class="cert-sign-img"
              />
            </div>
            <div class="cert-sign-right">
              Issued by<br>
              City Health Officer<br>
              Avadi City Municipal Corporation
            </div>
          </div>

        </div>
        <!-- end cert-page -->

        <!-- No Data -->
        <div v-else class="cert-state-wrap">
          <p class="text-muted">No certificate data available.</p>
        </div>

      </div>
      <!-- end cert-body -->

      <!-- Footer -->
      <div class="cert-footer">
        <button class="btn btn-sm btn-secondary" @click="closeCertificateModal">Close</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificatePreview',
  props: {
    certificateData: { type: Object,           default: null  },
    loading:         { type: Boolean,          default: false },
    error:           { type: String,           default: null  },
    showModal:       { type: Boolean,          default: false },
    petId:           { type: [String, Number], default: null  }
  },
  emits: ['close'],
  computed: {
    statusClass() {
      const map = {
        'Approved':     'pill-approved',
        'Rejected':     'pill-rejected',
        'Pending':      'pill-pending',
        'Under Review': 'pill-review',
      }
      return map[this.certificateData?.registration_status] || 'pill-pending'
    }
  },
  methods: {
    closeCertificateModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* ── Overlay ────────────────────────────────────────────────────────── */
.cert-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 12px;
}

/* ── Dialog ─────────────────────────────────────────────────────────── */
.cert-dialog {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 48px rgba(0, 0, 0, 0.26);
  width: min(840px, 100%);
  max-height: calc(100vh - 24px);
  overflow: hidden;
}

/* ── Top Bar ────────────────────────────────────────────────────────── */
.cert-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a3e6e;
  color: #fff;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
  border-radius: 10px 10px 0 0;
}
.cert-close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  opacity: .8;
}
.cert-close-btn:hover { opacity: 1; }

/* ── Body ───────────────────────────────────────────────────────────── */
.cert-body {
  flex: 1;
  overflow-y: auto;
  background: #eaecf0;
  padding: 0;
}

.cert-state-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

/* ── Certificate Page (white sheet) ─────────────────────────────────── */
.cert-page {
  background: #fff;
  margin: 12px;
  border: 1.5px solid #bbb;
  border-radius: 3px;
  padding: 14px 18px 12px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 11.5px;
  color: #111;
  line-height: 1.4;
}

/* ── Header ─────────────────────────────────────────────────────────── */
.cert-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 2.5px solid #1a3e6e;
  margin-bottom: 6px;
}
.cert-logo-cell { flex-shrink: 0; }
.cert-logo      { width: 66px; height: 66px; object-fit: contain; }

.cert-title-cell { flex: 1; text-align: center; }
.cert-corp { font-size: 15px; font-weight: 700; }
.cert-dept { font-size: 13px; font-weight: 700; }
.cert-doc  { font-size: 13px; font-weight: 400; margin-top: 2px; }

.cert-qr-cell { flex-shrink: 0; }
.cert-qr-box  {
  width: 66px; height: 66px;
  border: 1.5px solid #666;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: #999; font-family: Arial, sans-serif;
}

/* ── License Line ───────────────────────────────────────────────────── */
.cert-license-line {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0 3px;
}
.cert-lbl      { font-weight: 700; font-size: 11.5px; }
.cert-license-no { font-weight: 700; color: #1a3e6e; font-size: 11.5px; }

/* ── Status pill ────────────────────────────────────────────────────── */
.cert-status-pill {
  padding: 1px 9px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  font-family: Arial, sans-serif;
}
.pill-approved { background: #d4f7e3; color: #1a7a45; }
.pill-pending  { background: #fff3cd; color: #856404; }
.pill-rejected { background: #fde8ec; color: #b81c35; }
.pill-review   { background: #e0f0ff; color: #0055a4; }

/* ── Certify para ───────────────────────────────────────────────────── */
.cert-certify-para {
  font-size: 11px;
  margin: 4px 0 7px;
  line-height: 1.5;
}

/* ── Main Table ─────────────────────────────────────────────────────── */
.cert-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 7px;
  border: 1.5px solid #555;
}
.cert-th {
  border: 1.5px solid #555;
  padding: 0;
  width: 50%;
  vertical-align: top;
  background: #f4f4f4;
}
.cert-th-title {
  display: block;
  font-weight: 700;
  font-size: 11.5px;
  padding: 4px 8px;
  border-bottom: 1px solid #ccc;
}
.cert-photo-box {
  margin: 5px 8px;
  height: 50px;
  border: 1px dashed #aaa;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10.5px;
  color: #999;
}
.cert-td {
  border: 1px solid #ddd;
  padding: 4px 8px;
  width: 50%;
  vertical-align: middle;
}
.cert-td-lbl { font-weight: 700; font-size: 11px; margin-right: 4px; }
.cert-td-val { font-size: 11px; color: #222; }

/* ── Bottom Info Row ────────────────────────────────────────────────── */
.cert-info-row {
  display: flex;
  gap: 20px;
  margin-bottom: 6px;
}
.cert-info-col { flex: 1; }
.cert-info-line {
  display: flex;
  gap: 5px;
  margin-bottom: 3px;
  align-items: baseline;
}
.cert-val { font-size: 11px; color: #222; }

/* ── Duties ─────────────────────────────────────────────────────────── */
.cert-duties { margin-bottom: 5px; }
.cert-duties-heading { font-weight: 700; font-size: 11.5px; margin-bottom: 3px; }
.cert-duties-ol {
  margin: 0;
  padding-left: 16px;
}
.cert-duties-ol li { font-size: 11px; margin-bottom: 2px; line-height: 1.45; }

/* ── Note ───────────────────────────────────────────────────────────── */
.cert-note {
  font-size: 10.5px;
  line-height: 1.5;
  margin: 0 0 3px;
}
.cert-computer-note { font-size: 10.5px; margin: 0 0 5px; }

/* ── Signature ──────────────────────────────────────────────────────── */
.cert-signature {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 6px;
}
.cert-sign-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cert-sign-title {
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 3px;
  color: #111;
}
.cert-sign-img {
  height: 52px;
  width: auto;
  object-fit: contain;
}
.cert-sign-right {
  text-align: right;
  font-size: 11px;
  line-height: 1.6;
}

/* ── Footer ─────────────────────────────────────────────────────────── */
.cert-footer {
  padding: 10px 16px;
  border-top: 1px solid #e4e6ef;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  background: #fff;
  border-radius: 0 0 10px 10px;
}

/* ── Responsive ─────────────────────────────────────────────────────── */
@media (max-width: 580px) {
  .cert-page     { margin: 6px; padding: 10px 10px 8px; }
  .cert-logo     { width: 48px; height: 48px; }
  .cert-corp     { font-size: 12px; }
  .cert-qr-box   { width: 48px; height: 48px; }
  .cert-info-row { flex-direction: column; }
  /* Stack table on very small screens */
  .cert-table,
  .cert-table thead,
  .cert-table tbody,
  .cert-table tr,
  .cert-table th,
  .cert-table td { display: block; width: 100%; }
  .cert-th { border-bottom: 2px solid #555; }
}
</style>
<!--  -->