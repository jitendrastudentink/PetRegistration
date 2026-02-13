<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-fluid">
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-10">
        <img 
          src="/public/Tambaram_Corporation_new_logo.png" 
          alt="Loading..." 
          class="rotating-spinner"
        >
      </div>

      <!-- Registration Form Card -->
      <div v-else class="card">
        <div class="card-header">
          <h3 class="card-title fw-bold text-gray-800">
            PET DETAILS / செல்லப்பிராணியின் விவரம்
          </h3>
        </div>

        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            
            <!-- Row 1: Pet Name, Species, Identification Mark -->
            <div class="row mb-6">
              <!-- Pet Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Pet Name / செல்லப்பிராணியின் பெயர்
                </label>
                <input 
                  v-model="formData.petName" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Pet Name"
                  required
                />
              </div>

              <!-- Species -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Species / இனம்
                </label>
                <select 
                  v-model="formData.species" 
                  class="form-select form-select-solid"
                  required
                >
                  <option value="">Select</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <!-- Identification Mark -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Identification Mark / அடையாளக் குறி
                </label>
                <input 
                  v-model="formData.identificationMark" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Identification Mark"
                  required
                />
              </div>
            </div>

            <!-- Row 2: Breed, Colour, Sex -->
            <div class="row mb-6">
              <!-- Breed -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Breed / வகை
                </label>
                <select 
                  v-model="formData.breed" 
                  class="form-select form-select-solid"
                  required
                >
                  <option value="">Please Select Species</option>
                  <option value="labrador">Labrador</option>
                  <option value="german_shepherd">German Shepherd</option>
                  <option value="golden_retriever">Golden Retriever</option>
                  <option value="persian">Persian</option>
                  <option value="siamese">Siamese</option>
                  <option value="mixed">Mixed Breed</option>
                </select>
              </div>

              <!-- Colour -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Colour / நிறம்
                </label>
                <select 
                  v-model="formData.colour" 
                  class="form-select form-select-solid"
                  required
                >
                  <option value="">Select</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="brown">Brown</option>
                  <option value="golden">Golden</option>
                  <option value="gray">Gray</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>

              <!-- Sex -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Sex / பாலினம்
                </label>
                <div class="d-flex align-items-center mt-3">
                  <div class="form-check form-check-custom form-check-solid me-6">
                    <input 
                      v-model="formData.sex" 
                      class="form-check-input" 
                      type="radio" 
                      value="male" 
                      id="sexMale"
                      required
                    />
                    <label class="form-check-label" for="sexMale">
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid">
                    <input 
                      v-model="formData.sex" 
                      class="form-check-input" 
                      type="radio" 
                      value="female" 
                      id="sexFemale"
                    />
                    <label class="form-check-label" for="sexFemale">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3: Age Years, Months, Sterilized -->
            <div class="row mb-6">
              <!-- Age Years -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Age years / வயது வருடம்
                </label>
                <select 
                  v-model="formData.ageYears" 
                  class="form-select form-select-solid"
                  required
                >
                  <option value="">Select</option>
                  <option v-for="year in 20" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>

              <!-- Months -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Months / மாதம்
                </label>
                <select 
                  v-model="formData.ageMonths" 
                  class="form-select form-select-solid"
                  required
                >
                  <option value="">Select</option>
                  <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
                </select>
              </div>

              <!-- Whether Sterilized -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Whether the Pet is Sterilized? / செல்லப்பிராணிக்கு கருத்தடை செய்யப்பட்டுள்ளதா?
                </label>
                <div class="d-flex align-items-center mt-3">
                  <div class="form-check form-check-custom form-check-solid me-6">
                    <input 
                      v-model="formData.isSterilized" 
                      class="form-check-input" 
                      type="radio" 
                      value="yes" 
                      id="sterilizedYes"
                      required
                    />
                    <label class="form-check-label" for="sterilizedYes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid">
                    <input 
                      v-model="formData.isSterilized" 
                      class="form-check-input" 
                      type="radio" 
                      value="no" 
                      id="sterilizedNo"
                    />
                    <label class="form-check-label" for="sterilizedNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 4: Adopted from Street, ARV Administered, ARV Date -->
            <div class="row mb-6">
              <!-- Adopted from Street -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Whether the Pet is adopted from Street? / செல்லப்பிராணி தெருக்களிலிருந்து தத்தெடுக்கப்பட்டதா?
                </label>
                <div class="d-flex align-items-center mt-3">
                  <div class="form-check form-check-custom form-check-solid me-6">
                    <input 
                      v-model="formData.isAdoptedFromStreet" 
                      class="form-check-input" 
                      type="radio" 
                      value="yes" 
                      id="adoptedYes"
                      required
                    />
                    <label class="form-check-label" for="adoptedYes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid">
                    <input 
                      v-model="formData.isAdoptedFromStreet" 
                      class="form-check-input" 
                      type="radio" 
                      value="no" 
                      id="adoptedNo"
                    />
                    <label class="form-check-label" for="adoptedNo">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <!-- ARV Administered -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Whether Anti Rabies Vaccination (ARV) is Administered to the Dog? / செல்லப்பிராணிக்கு வெறிநாய்க்கடி தேய் நோய் தடுப்பு ஊசி செலுத்தப்பட்டதா?
                </label>
                <div class="d-flex align-items-center mt-3">
                  <div class="form-check form-check-custom form-check-solid me-6">
                    <input 
                      v-model="formData.isARVAdministered" 
                      class="form-check-input" 
                      type="radio" 
                      value="yes" 
                      id="arvYes"
                      required
                    />
                    <label class="form-check-label" for="arvYes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-custom form-check-solid">
                    <input 
                      v-model="formData.isARVAdministered" 
                      class="form-check-input" 
                      type="radio" 
                      value="no" 
                      id="arvNo"
                    />
                    <label class="form-check-label" for="arvNo">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <!-- ARV Date -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  ARV Date / தடுப்பூசி தேதி
                </label>
                <input 
                  v-model="formData.arvDate" 
                  type="date" 
                  class="form-control form-control-solid"
                  required
                />
              </div>
            </div>

            <!-- Row 5: De-Worming Date, Other Vaccination, Previous License No -->
            <div class="row mb-6">
              <!-- De-Worming Date -->
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  De-Worming Date / புழுக்கொல்லி தேதி
                </label>
                <input 
                  v-model="formData.deWormingDate" 
                  type="date" 
                  class="form-control form-control-solid"
                />
              </div>

              <!-- Other Vaccination -->
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  Other Vaccination / மற்ற தடுப்பூசி
                </label>
                <input 
                  v-model="formData.otherVaccination" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Other Vaccination"
                />
              </div>

              <!-- Previous License No -->
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  Previous License No / முந்தைய உரிம எண்
                </label>
                <input 
                  v-model="formData.previousLicenseNo" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Previous License No"
                />
              </div>
            </div>

            <!-- Separator -->
            <div class="separator separator-dashed my-8"></div>

            <!-- Veterinarian Details Section -->
            <h4 class="fw-bold text-gray-800 mb-6">
              VETERINARIAN DETAILS / கால்நடை மருத்துவர் விவரம்
            </h4>

            <!-- Row 6: Dispensary Name, Vet Doctor Name, Mobile Number -->
            <div class="row mb-6">
              <!-- Dispensary Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  Veterinary Dispensary Name / கால்நடை மருந்தகத்தின் பெயர்
                </label>
                <input 
                  v-model="formData.dispensaryName" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Dispensary Name"
                />
              </div>

              <!-- Vet Doctor Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold required">
                  Veterinary Doctor Name / கால்நடை மருத்துவர் பெயர்
                </label>
                <input 
                  v-model="formData.vetDoctorName" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Doctor Name"
                  required
                />
              </div>

              <!-- Mobile Number -->
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  Mobile Number / தொலைபேசி எண்
                </label>
                <input 
                  v-model="formData.vetMobileNumber" 
                  type="tel" 
                  class="form-control form-control-solid" 
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                />
              </div>
            </div>

            <!-- Row 7: Vet Council Number -->
            <div class="row mb-6">
              <div class="col-md-4">
                <label class="form-label fw-semibold">
                  Veterinary Council Number / கால்நடை மருத்துவர் கவுன்சில் எண்
                </label>
                <input 
                  v-model="formData.vetCouncilNumber" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Council Number"
                />
              </div>
            </div>

            <!-- Separator -->
            <div class="separator separator-dashed my-8"></div>

            <!-- Document Upload Section -->
            <h4 class="fw-bold text-gray-800 mb-6">
              DOCUMENT UPLOADS / ஆவணங்கள் பதிவேற்றம்
            </h4>

            <!-- Row 8: Owner Photo, Address Proof -->
            <div class="row mb-6">
              <!-- Owner Photo -->
              <div class="col-md-6">
                <label class="form-label fw-semibold required">
                  Owner Photo / உரிமையாளர் புகைப்படம்
                  <span class="text-muted fs-7">(Max 1 MB)</span>
                </label>
                <input 
                  type="file" 
                  class="form-control form-control-solid" 
                  accept="image/*"
                  @change="handleFileUpload($event, 'ownerPhoto')"
                  required
                />
                <div v-if="formData.ownerPhoto" class="text-success mt-2 fs-7">
                  <i class="ki-duotone ki-check-circle fs-3">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ formData.ownerPhoto.name }}
                </div>
              </div>

              <!-- Address Proof -->
              <div class="col-md-6">
                <label class="form-label fw-semibold required">
                  Address Proof / முகவரி ஆதாரம்
                  <span class="text-muted fs-7">(Max 1 MB)</span>
                </label>
                <input 
                  type="file" 
                  class="form-control form-control-solid" 
                  accept="image/*,application/pdf"
                  @change="handleFileUpload($event, 'addressProof')"
                  required
                />
                <div v-if="formData.addressProof" class="text-success mt-2 fs-7">
                  <i class="ki-duotone ki-check-circle fs-3">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ formData.addressProof.name }}
                </div>
              </div>
            </div>

            <!-- Row 9: Pet Photo, Rabies Certificate -->
            <div class="row mb-6">
              <!-- Pet Photo -->
              <div class="col-md-6">
                <label class="form-label fw-semibold required">
                  Pet Photo / செல்லப்பிராணியின் புகைப்படம்
                  <span class="text-muted fs-7">(Max 1 MB)</span>
                </label>
                <input 
                  type="file" 
                  class="form-control form-control-solid" 
                  accept="image/*"
                  @change="handleFileUpload($event, 'petPhoto')"
                  required
                />
                <div v-if="formData.petPhoto" class="text-success mt-2 fs-7">
                  <i class="ki-duotone ki-check-circle fs-3">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ formData.petPhoto.name }}
                </div>
              </div>

              <!-- Rabies Certificate -->
              <div class="col-md-6">
                <label class="form-label fw-semibold required">
                  Rabies Certificate / வெறிநாய்க்கடி சான்றிதழ்
                  <span class="text-muted fs-7">(Max 1 MB)</span>
                </label>
                <input 
                  type="file" 
                  class="form-control form-control-solid" 
                  accept="image/*,application/pdf"
                  @change="handleFileUpload($event, 'rabiesCertificate')"
                  required
                />
                <div v-if="formData.rabiesCertificate" class="text-success mt-2 fs-7">
                  <i class="ki-duotone ki-check-circle fs-3">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ formData.rabiesCertificate.name }}
                </div>
              </div>
            </div>

            <!-- Form Buttons -->
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center gap-3">
                <button type="submit" class="btn btn-primary px-8" :disabled="submitting">
                  <span v-if="!submitting">Save</span>
                  <span v-else>
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </span>
                </button>
                <button type="button" class="btn btn-secondary px-8" @click="clearForm">
                  Clear
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>

  <!-- Toast Container -->
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
    <div 
      v-for="toast in toasts" 
      :key="toast.id"
      class="toast show align-items-center text-white border-0"
      :class="toast.type === 'success' ? 'bg-success' : 'bg-danger'"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">
          <i class="ki-duotone fs-2 me-2" :class="toast.type === 'success' ? 'ki-check-circle' : 'ki-cross-circle'">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          {{ toast.message }}
        </div>
        <button 
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          @click="removeToast(toast.id)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
}

// Form Data
const formData = reactive({
  petName: '',
  species: '',
  identificationMark: '',
  breed: '',
  colour: '',
  sex: '',
  ageYears: '',
  ageMonths: '',
  isSterilized: '',
  isAdoptedFromStreet: '',
  isARVAdministered: '',
  arvDate: '',
  deWormingDate: '',
  otherVaccination: '',
  previousLicenseNo: '',
  dispensaryName: '',
  vetDoctorName: '',
  vetMobileNumber: '',
  vetCouncilNumber: '',
  ownerPhoto: null as File | null,
  addressProof: null as File | null,
  petPhoto: null as File | null,
  rabiesCertificate: null as File | null
})

// State
const loading = ref(true)
const submitting = ref(false)
const toasts = ref<Toast[]>([])
let toastIdCounter = 0

// Initialize page with loading state
onMounted(() => {
  // Simulate page load delay
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

// Toast functions
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const id = ++toastIdCounter
  toasts.value.push({ id, message, type })
  
  setTimeout(() => {
    removeToast(id)
  }, 4000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

// File upload handler
const handleFileUpload = (event: Event, fieldName: string) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    // Validate file size (max 1MB)
    if (file.size > 1024 * 1024) {
      showToast('File size should not exceed 1 MB', 'error')
      target.value = ''
      return
    }
    
    // Store file
    formData[fieldName] = file
  }
}

// Submit form
const handleSubmit = () => {
  // Validate required fields
  if (!formData.petName || !formData.species || !formData.vetDoctorName) {
    showToast('Please fill all required fields', 'error')
    return
  }

  // Validate file uploads
  if (!formData.ownerPhoto || !formData.addressProof || !formData.petPhoto || !formData.rabiesCertificate) {
    showToast('Please upload all required documents', 'error')
    return
  }

  submitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    console.log('Form Data:', formData)
    showToast('Pet registration submitted successfully!', 'success')
    submitting.value = false
    
    // Optionally clear form after successful submission
    // clearForm()
  }, 1500)
}

// Clear form
const clearForm = () => {
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string') {
      formData[key] = ''
    } else {
      formData[key] = null
    }
  })
  
  // Reset file inputs
  const fileInputs = document.querySelectorAll('input[type="file"]')
  fileInputs.forEach((input: HTMLInputElement) => {
    input.value = ''
  })
  
  showToast('Form cleared', 'success')
}
</script>

<style scoped>
.form-label.required::after {
  content: ' *';
  color: #f1416c;
}

.separator {
  border-bottom: 1px dashed #e4e6ef;
}

.form-check-input:checked {
  background-color: #009ef7;
  border-color: #009ef7;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.15em;
}

/* Rotating Spinner Animation */
.rotating-spinner {
  width: 60px;
  height: 60px;
  animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Toast Styles */
.toast {
  min-width: 300px;
  margin-bottom: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-body {
  display: flex;
  align-items: center;
  padding: 0.75rem;
}

#kt_app_content {
  width: 100%;
  transition: all 0.3s ease;
}

.app-container {
  width: 100%;
  max-width: 100%;
  padding: 20px;
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-label {
    font-size: 0.9rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .d-flex.gap-3 {
    flex-direction: column;
  }
}
</style>