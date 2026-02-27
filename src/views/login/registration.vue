<template>
  <div class="pet-registration-wrapper">
    <svg class="bg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" preserveAspectRatio="xMinYMin slice" viewBox="0 0 700 700">
      <g mask="url(&quot;#SvgjsMask1108&quot;)" fill="none">
        <path d="M350 46.32C309.83 46.32 289.24 110.49 289.24 175C289.24 241.12 309.65 307.58 350 307.58C399.15 307.58 468.24 240.85 468.24 175C468.24 110.22 399.33 46.32 350 46.32" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
        <path d="M175 479.71C143.61 479.71 121.65 492.24 115.77 525C101.89 602.38 168.2 650.55 135.48 700C110.31 738.05 29.56 738.18 0 700C-38.18 650.68 0 612.5 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C262.5 0 262.5 0 350 0C437.5 0 437.5 0 525 0C612.5 0 656.25 -43.75 700 0C743.75 43.75 700 87.5 700 175C700 262.5 700 262.5 700 350C700 407.5 734.35 448.78 700 465C646.85 490.1 600.24 414.75 525 432.64C474.07 444.75 447.67 487.22 447.67 525C447.67 551.87 483.89 551.25 525 561.94C610.06 584.06 645.88 547.93 700 590.63C733.38 616.96 733.65 678.97 700 700C646.15 733.65 612.5 700 525 700C437.5 700 437.5 700 350 700C271.25 700 213.36 739.99 192.5 700C167.71 652.49 264.5 598.01 258.7 525C255.75 487.86 215.07 479.71 175 479.71" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
        <path d="M287.78 0C304.38 54.34 226.45 88.15 228.47 175C230.52 263.15 311.03 278.38 295.91 350C284.3 405 233.75 386.69 175 428.24C110.02 474.19 90.44 462.02 48.46 525C2.94 593.29 12.36 690.79 0 690.79C-11.87 690.79 0 607.89 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C231.39 0 277.65 -33.16 287.78 0" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1108">
          <rect width="700" height="700" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
    <div class="animated-pets">
      <div class="pet-circle left-top">
        <img src="/CAT.png" alt="Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <div class="pet-circle left-middle">
        <img src="/CAT.png" alt="Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <div class="pet-circle left-bottom">
        <img src="/DOG.png" alt="Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <div class="pet-circle right-top">
        <img src="/DOG.png" alt="Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <div class="pet-circle right-middle">
        <img src="/DOG.png" alt="Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <div class="pet-circle right-bottom">
        <img src="/CAT.png" alt="Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
      <svg class="curved-line left-line" viewBox="0 0 200 800" preserveAspectRatio="none">
        <path d="M 180 0 Q 50 200, 150 400 T 180 800" stroke="#e74c3c" stroke-width="3" fill="none"/>
      </svg>
      <svg class="curved-line right-line" viewBox="0 0 200 800" preserveAspectRatio="none">
        <path d="M 20 0 Q 150 200, 50 400 T 20 800" stroke="#e74c3c" stroke-width="3" fill="none"/>
      </svg>
    </div>
    <div class="registration-card">
      <!-- Logo -->
      <div class="logo-section">
        <img 
          src="/Tambaram_Corporation_new_logo.jpg" 
          alt="Tambaram Corporation Logo" 
          class="corporation-logo"
        />
        <h2 class="corporation-name">THE COMMISIONER AVADI CITY MUNICIPAL CORPORATION</h2>
      </div>

      <!-- Title -->
      <h3 class="registration-title">Pet Owner Registration</h3>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="form-container">
          <!-- Left Column -->
          <div class="form-column">
            <div class="section-title">Personal Information (ব্যক্তিগত তথ্য)</div>

            <!-- Row 1: Title, First Name, Last Name -->
            <div class="form-row three-cols">
              <div class="form-group">
                <label class="form-label">Title (தலைப்பு)</label>
                <select v-model="form.title" class="form-control">
                  <option value="" disabled>Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">First Name (முதல் பெயர்) <span class="required">*</span></label>
                <input v-model="form.firstName" type="text" class="form-control" placeholder="First Name" required />
              </div>
              <div class="form-group">
                <label class="form-label">Last Name (கடைசி பெயர்) <span class="required">*</span></label>
                <input v-model="form.lastName" type="text" class="form-control" placeholder="Last Name" required />
              </div>
            </div>

            <!-- Row 2: Mobile Number, Email (2 columns) -->
            <div class="form-row two-cols">
              <div class="form-group">
                <label class="form-label">Mobile Number (கைபேசி எண்) <span class="required">*</span></label>
                <input v-model="form.mobile" type="tel" class="form-control" placeholder="Mobile Number" pattern="[0-9]{10}" maxlength="10" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email (மின்னஞ்சல்)</label>
                <input v-model="form.email" type="email" class="form-control" placeholder="Email" />
              </div>
            </div>

            <!-- Address Section -->
            <div class="section-title">Address (முகவரி)</div>

            <!-- Row: State, Zone, Ward -->
            <div class="form-row three-cols">
              <!-- State - Fixed to Tamilnadu -->
              <div class="form-group">
                <label class="form-label">State (மாநிலம்)</label>
                <input
                  type="text"
                  class="form-control state-fixed"
                  value="Tamilnadu / தமிழ்நாடு"
                  readonly
                />
              </div>

              <!-- Zone - Select -->
              <div class="form-group">
                <label class="form-label">Zone (மண்டலம்) <span class="required">*</span></label>
                <select v-model="form.zone" class="form-control" @change="onZoneChange">
                  <option value="" disabled>Select Zone</option>
                  <option value="Zone1">Zone 1</option>
                  <option value="Zone2">Zone 2</option>
                  <option value="Zone3">Zone 3</option>
                  <option value="Zone4">Zone 4</option>
                </select>
              </div>

              <!-- Ward - Filtered by Zone -->
              <div class="form-group">
                <label class="form-label">Ward (வார்டு) <span class="required">*</span></label>
                <select v-model="form.ward" class="form-control" :disabled="!form.zone">
                  <option value="" disabled>{{ form.zone ? 'Select Ward' : 'Please select Zone first' }}</option>
                  <option v-for="ward in filteredWards" :key="ward" :value="String(ward)">Ward {{ ward }}</option>
                </select>
              </div>
            </div>

            <!-- Row: Street Name, Door No, Locality (3 columns) -->
            <div class="form-row three-cols">
              <div class="form-group">
                <label class="form-label">Street Name (தெரு பெயர்)</label>
                <select v-model="form.streetName" class="form-control">
                  <option value="" disabled>Please select zone and ward</option>
                  <option value="138/52b varadharajan street">138/52b varadharajan street</option>
                  <option value="242 vinayagar kovil street mellanathur thiruvallur">242 vinayagar kovil street mellanathur thiruvallur</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Door No (கதவு எண்)</label>
                <input v-model="form.doorNo" type="text" class="form-control" placeholder="Door No" />
              </div>
              <div class="form-group">
                <label class="form-label">Locality / Building Name (இருப்பிடம் / கட்டிட பெயர்)</label>
                <input v-model="form.locality" type="text" class="form-control" placeholder="Locality / Building Name" />
              </div>
            </div>

            <!-- Row: PIN Code, Property Tax Number (2 columns) -->
            <div class="form-row two-cols">
              <div class="form-group">
                <label class="form-label">PIN Code (தபால் குறியீடு)</label>
                <input v-model="form.pinCode" type="text" class="form-control" placeholder="PIN Code" pattern="[0-9]{6}" maxlength="6" />
              </div>
              <div class="form-group">
                <label class="form-label">Property Tax Number (சொத்து வரி எண்)</label>
                <input v-model="form.propertyTaxNumber" type="text" class="form-control" placeholder="Property Tax Number" />
              </div>
            </div>

            <!-- Row: Pet Owner Category -->
            <div class="form-row">
              <div class="form-group full-width">
                <label class="form-label">Pet Owner Category (செல்லப்பிராணி உரிமையாளர் வகை)</label>
                <select v-model="form.petOwnerCategory" class="form-control">
                  <option value="" disabled>Select Category</option>
                  <option value="Household">Household</option>
                  <option value="Professional Breeders">Professional Breeders</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="form-column">
            <!-- Co-Owner Section -->
            <div class="section-title">Co-Owner Details (கூட்டு உரிமையாளர் விவரங்கள்)</div>

            <div class="form-row">
              <div class="form-group full-width">
                <label class="form-label">Co - Owner 1 (Name) (கூட்டு உரிமையாளர் 1 (பெயர்)) <span class="optional">(Optional)</span></label>
                <input v-model="form.coOwner1FirstName" type="text" class="form-control" placeholder="Name" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group full-width">
                <label class="form-label">Co - Owner 1 (Mobile Number) (கூட்டு உரிமையாளர் 1 (கைபேசி எண்)) <span class="optional">(Optional)</span></label>
                <input v-model="form.coOwner1Mobile" type="tel" class="form-control" placeholder="10-digit Mobile Number" pattern="[0-9]{10}" maxlength="10" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group full-width">
                <label class="form-label">Co - Owner 2 (Name) (கூட்டு உரிமையாளர் 2 (பெயர்)) <span class="optional">(Optional)</span></label>
                <input v-model="form.coOwner2FirstName" type="text" class="form-control" placeholder="Name" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group full-width">
                <label class="form-label">Co - Owner 2 (Mobile Number) (கூட்டு உரிமையாளர் 2 (கைபேசி எண்)) <span class="optional">(Optional)</span></label>
                <input v-model="form.coOwner2Mobile" type="tel" class="form-control" placeholder="10-digit Mobile Number" pattern="[0-9]{10}" maxlength="10" />
              </div>
            </div>

            <!-- OTP Section -->
            <div class="section-title">Pin Generate (பின் உৎபன்ன)</div>

            <div class="form-row two-cols">
              <div class="form-group">
                <label class="form-label">Enter 6-Digit OTP (6 இலக்க OTP ஐ உள்ளிடவும்) <span class="required">*</span></label>
                <input v-model="form.otp" type="text" class="form-control" placeholder="Enter OTP" pattern="[0-9]{6}" maxlength="6" required />
                <small class="form-hint">Enter 6-digit OTP</small>
              </div>
              <div class="form-group">
                <label class="form-label">Confirm OTP (OTP ஐ உறுதிப்படுத்தவும்) <span class="required">*</span></label>
                <input v-model="form.confirmOtp" type="text" class="form-control" placeholder="Confirm OTP" pattern="[0-9]{6}" maxlength="6" required />
              </div>
            </div>

            <!-- Messages and Submit -->
            <div class="bottom-section">
              <div v-if="error" class="error-message">{{ error }}</div>
              <div v-if="success" class="success-message">{{ success }}</div>
              <div class="submit-section">
                <button type="submit" class="submit-btn" :disabled="loading">
                  <span v-if="loading" class="spinner"></span>
                  <span v-else>Submit</span>
                </button>
              </div>
              <div class="back-link">
                <a href="#" @click.prevent="backToLogin">Already have an account? Login</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/apiService';

// Zone → Ward mapping
const ZONE_WARDS = {
  Zone1: [1, 2, 3, 4, 5, 11, 12, 15, 16, 17, 18, 19],
  Zone2: [6, 7, 8, 9, 10, 25, 26, 27, 28, 29, 30, 32],
  Zone3: [31, 33, 34, 35, 40, 41, 42, 43, 44, 46, 47, 48],
  Zone4: [13, 14, 20, 21, 22, 23, 24, 36, 37, 38, 39, 45]
};

export default {
  name: 'RegisterUser',
  data() {
    return {
      form: {
        title: '',
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        propertyTaxNumber: '',
        petOwnerCategory: '',
        state: 'Tamilnadu',
        zone: '',
        ward: '',
        streetName: '',
        doorNo: '',
        locality: '',
        pinCode: '',
        coOwner1FirstName: '',
        coOwner1Mobile: '',
        coOwner2FirstName: '',
        coOwner2Mobile: '',
        otp: '',
        confirmOtp: ''
      },
      loading: false,
      error: '',
      success: ''
    };
  },
  computed: {
    filteredWards() {
      return this.form.zone ? ZONE_WARDS[this.form.zone] || [] : [];
    }
  },
  methods: {
    onZoneChange() {
      this.form.ward = '';
    },
    async handleSubmit() {
      this.error = '';
      this.success = '';

      // ===== VALIDATION START =====
      
      // Required fields
      if (!this.form.firstName || this.form.firstName.trim() === '') {
        this.error = 'First Name is required';
        return;
      }

      if (!this.form.lastName || this.form.lastName.trim() === '') {
        this.error = 'Last Name is required';
        return;
      }

      if (!this.form.mobile || this.form.mobile.length !== 10) {
        this.error = 'Please enter a valid 10-digit mobile number';
        return;
      }

      if (!this.form.zone) {
        this.error = 'Zone is required';
        return;
      }

      if (!this.form.ward) {
        this.error = 'Ward is required';
        return;
      }

      // Optional PIN Code validation (only if provided)
      if (this.form.pinCode && this.form.pinCode.length !== 6) {
        this.error = 'Please enter a valid 6-digit PIN code';
        return;
      }

      // OTP validation
      if (!this.form.otp || this.form.otp.length !== 6) {
        this.error = 'Please enter a valid 6-digit OTP';
        return;
      }

      if (!this.form.confirmOtp || this.form.confirmOtp.length !== 6) {
        this.error = 'Please confirm OTP (6 digits)';
        return;
      }

      if (this.form.otp !== this.form.confirmOtp) {
        this.error = 'OTP and Confirm OTP do not match';
        return;
      }

      // Co-Owner mobile validation (optional, but if provided must be 10 digits)
      if (this.form.coOwner1Mobile && this.form.coOwner1Mobile.length !== 10) {
        this.error = 'Co-Owner 1 mobile number must be 10 digits (or leave blank)';
        return;
      }

      if (this.form.coOwner2Mobile && this.form.coOwner2Mobile.length !== 10) {
        this.error = 'Co-Owner 2 mobile number must be 10 digits (or leave blank)';
        return;
      }

      // ===== VALIDATION END =====

      this.loading = true;

      try {
        // Build API payload with correct field names for backend
        const ownerData = {
          first_name: this.form.firstName.trim(),
          last_name: this.form.lastName.trim(),
          title: this.form.title || null,
          mobileNumber: this.form.mobile,
          emailId: this.form.email || null,
          propertyTaxNumber: this.form.propertyTaxNumber || null,
          petOwnerCategory: this.form.petOwnerCategory || null,
          state: this.form.state,
          zone: this.form.zone,
          ward: String(this.form.ward), // CRITICAL: Convert to string
          streetName: this.form.streetName || null,
          doorNo: this.form.doorNo || null,
          locality: this.form.locality || null,
          pinCode: this.form.pinCode || null,
          // Co-Owner fields - these will be mapped to database field names by API
          coOwner1FirstName: this.form.coOwner1FirstName || null,
          coOwner1Mobile: this.form.coOwner1Mobile || null,
          coOwner2FirstName: this.form.coOwner2FirstName || null,
          coOwner2Mobile: this.form.coOwner2Mobile || null,
          otp: this.form.otp
        };

        // Remove null/empty values to keep payload clean
        Object.keys(ownerData).forEach(key => {
          if (ownerData[key] === '' || ownerData[key] === null) {
            delete ownerData[key];
          }
        });

        console.log('Submitting registration with payload:', ownerData);

        const response = await ApiService.registerPetOwner(ownerData);
        console.log('Registration response:', response);
        this.success = 'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
      } catch (err) {
        console.error('Registration error:', err);
        this.error = err.response?.data?.message || err.message || 'Registration failed. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    backToLogin() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.required {
  color: #e74c3c;
  margin-left: 2px;
}

.optional {
  color: #999;
  font-size: 11px;
  font-weight: 400;
  margin-left: 2px;
}

.pet-registration-wrapper {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 0;
}

.animated-pets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.pet-circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pet-circle::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid;
  animation: pulse 3s ease-in-out infinite;
}

.left-top::before,
.left-middle::before { border-color: #3498db; }
.left-bottom::before { border-color: #e74c3c; }
.right-top::before,
.right-middle::before { border-color: #e74c3c; }
.right-bottom::before { border-color: #3498db; }

.left-top    { top: 5%;    left: 5%;   animation: float-gentle 4s ease-in-out infinite; }
.left-middle { top: 45%;   left: 3%;   animation: float-gentle 4.5s ease-in-out infinite 0.5s; }
.left-bottom { bottom: 10%; left: 7%;  animation: float-gentle 4.2s ease-in-out infinite 1s; }
.right-top   { top: 10%;   right: 5%;  animation: float-gentle 3.8s ease-in-out infinite 0.3s; }
.right-middle{ top: 42%;   right: 3%;  animation: float-gentle 4.3s ease-in-out infinite 0.8s; }
.right-bottom{ bottom: 5%; right: 8%;  animation: float-gentle 4s ease-in-out infinite 1.2s; }

.curved-line { position: absolute; height: 100%; width: 150px; opacity: 0.6; }
.left-line   { left: 0; top: 0; }
.right-line  { right: 0; top: 0; }

.pet-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  position: relative;
  z-index: 1;
}

.sleep-z {
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #F26A2C;
  opacity: 0;
  font-family: Arial, sans-serif;
  top: -20px;
  left: 50%;
  animation: float-z 3s ease-out infinite;
}
.sleep-z.z-2 { animation: float-z 3s ease-out 1s infinite; font-size: 14px; }
.sleep-z.z-3 { animation: float-z 3s ease-out 2s infinite; font-size: 12px; }

@keyframes float-gentle {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1);   opacity: 0.6; }
  50%       { transform: scale(1.1); opacity: 0.8; }
}
@keyframes float-z {
  0%   { opacity: 0; transform: translateY(0) translateX(-50%) scale(0.5); }
  20%  { opacity: 1; }
  80%  { opacity: 0.8; }
  100% { opacity: 0; transform: translateY(-40px) translateX(-30px) scale(1); }
}

.registration-card {
  background: white;
  border-radius: 16px;
  padding: 24px 32px;
  max-width: 1400px;
  width: 100%;
  box-shadow: 0 15px 50px rgba(0,0,0,0.15);
  position: relative;
  z-index: 1;
  max-height: 95vh;
  overflow-y: auto;
}

.logo-section {
  text-align: center;
  margin-bottom: 10px;
}

.corporation-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 6px;
}

.corporation-name {
  font-size: 15px;
  color: #2c3e50;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.registration-title {
  text-align: center;
  color: #3498db;
  font-size: 17px;
  font-weight: 600;
  margin: 8px 0 20px 0;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.form-column {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 10px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid #3498db;
}

.form-row {
  display: grid;
  gap: 12px;
  margin-bottom: 12px;
}

.form-row.three-cols { grid-template-columns: repeat(3, 1fr); }
.form-row.two-cols   { grid-template-columns: repeat(2, 1fr); }
.form-row.four-cols  { grid-template-columns: repeat(4, 1fr); }

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-size: 12px;
  color: #555;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.3s ease;
  background-color: #fff;
}

.form-control:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52,152,219,0.1);
}

.form-control::placeholder { color: #999; }

.form-control:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
  color: #aaa;
}

/* Fixed State field styling */
.state-fixed {
  background-color: #f0f4f8;
  color: #555;
  cursor: default;
  border-color: #ccc;
}

select.form-control {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 30px;
}

.form-hint {
  font-size: 10px;
  color: #888;
  margin-top: 3px;
}

.bottom-section { 
  margin-top: auto;
  padding-top: 12px;
}

.submit-section {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 12px;
}

.submit-btn {
  padding: 10px 42px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102,126,234,0.4);
  min-width: 130px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102,126,234,0.6);
}
.submit-btn:active:not(:disabled) { transform: translateY(0); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

@keyframes spin { to { transform: rotate(360deg); } }

.error-message {
  color: #e74c3c;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  padding: 8px;
  background: #fee;
  border-radius: 6px;
  border-left: 4px solid #e74c3c;
}

.success-message {
  color: #27ae60;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  padding: 8px;
  background: #e8f8f5;
  border-radius: 6px;
  border-left: 4px solid #27ae60;
}

.back-link { text-align: center; margin-top: 10px; }

.back-link a {
  color: #3498db;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
}
.back-link a:hover { color: #2980b9; text-decoration: underline; }

/* Responsive */
@media (max-width: 1366px) {
  .registration-card { max-width: 1200px; padding: 20px 28px; }
  .pet-circle { width: 85px; height: 85px; }
  .pet-image  { width: 50px; height: 50px; }
}

@media (max-width: 1024px) {
  .form-container { grid-template-columns: 1fr; gap: 20px; }
  .registration-card { max-height: none; overflow-y: auto; }
  .pet-circle { width: 75px; height: 75px; }
  .pet-image  { width: 45px; height: 45px; }
  .form-row.four-cols { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .form-row.three-cols,
  .form-row.two-cols,
  .form-row.four-cols { grid-template-columns: 1fr; }
  .left-bottom, .right-top { display: none; }
}

@media (max-width: 480px) {
  .registration-card { padding: 16px 14px; }
  .corporation-logo  { width: 60px; height: 60px; }
  .corporation-name  { font-size: 13px; }
  .registration-title{ font-size: 15px; }
  .left-middle, .right-middle { display: none; }
}
</style>