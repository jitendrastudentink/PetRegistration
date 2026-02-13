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
            
            <!-- Dynamic Pet Details Sections -->
            <div v-for="(section, sectionIndex) in formSections" :key="sectionIndex">
              
              <!-- Section Header (if exists) -->
              <h4 v-if="section.title" class="fw-bold text-gray-800 mb-6">
                {{ section.title }}
              </h4>

              <!-- Dynamic Rows in Section -->
              <div 
                v-for="(row, rowIndex) in section.rows" 
                :key="`${sectionIndex}-${rowIndex}`" 
                class="row mb-6"
              >
                <!-- Dynamic Fields in Row -->
                <div 
                  v-for="field in row" 
                  :key="field.name"
                  :class="field.colClass"
                >
                  <!-- Text Input -->
                  <div v-if="field.type === 'text'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                      <span v-if="field.hint" class="text-muted fs-7">{{ field.hint }}</span>
                    </label>
                    <input 
                      v-model="formData[field.name]"
                      type="text" 
                      class="form-control form-control-solid" 
                      :placeholder="field.placeholder"
                      :required="field.required"
                      :pattern="field.pattern"
                    />
                  </div>

                  <!-- Number/Tel Input -->
                  <div v-if="field.type === 'number' || field.type === 'tel'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                    </label>
                    <input 
                      v-model="formData[field.name]"
                      :type="field.type" 
                      class="form-control form-control-solid" 
                      :placeholder="field.placeholder"
                      :required="field.required"
                      :pattern="field.pattern"
                    />
                  </div>

                  <!-- Select Dropdown -->
                  <div v-if="field.type === 'select'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                    </label>
                    <select 
                      v-model="formData[field.name]"
                      class="form-select form-select-solid"
                      :required="field.required"
                    >
                      <option value="">{{ field.placeholder }}</option>
                      <option 
                        v-for="option in field.options" 
                        :key="option.value" 
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                  </div>

                  <!-- Radio Buttons -->
                  <div v-if="field.type === 'radio'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                    </label>
                    <div class="d-flex align-items-center mt-3">
                      <div 
                        v-for="option in field.options" 
                        :key="option.value"
                        class="form-check form-check-custom form-check-solid me-6"
                      >
                        <input 
                          v-model="formData[field.name]"
                          class="form-check-input" 
                          type="radio" 
                          :value="option.value" 
                          :id="`${field.name}_${option.value}`"
                          :required="field.required"
                        />
                        <label class="form-check-label" :for="`${field.name}_${option.value}`">
                          {{ option.label }}
                        </label>
                      </div>
                    </div>
                  </div>

                  <!-- Date Input -->
                  <div v-if="field.type === 'date'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                    </label>
                    <input 
                      v-model="formData[field.name]"
                      type="date" 
                      class="form-control form-control-solid"
                      :required="field.required"
                    />
                  </div>

                  <!-- Textarea -->
                  <div v-if="field.type === 'textarea'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                    </label>
                    <textarea 
                      v-model="formData[field.name]"
                      class="form-control form-control-solid" 
                      :placeholder="field.placeholder"
                      :rows="field.rows || 3"
                      :required="field.required"
                    ></textarea>
                  </div>

                  <!-- File Upload -->
                  <div v-if="field.type === 'file'">
                    <label class="form-label fw-semibold" :class="{ required: field.required }">
                      {{ field.label }}
                      <span v-if="field.hint" class="text-muted fs-7">{{ field.hint }}</span>
                    </label>
                    <input 
                      type="file" 
                      class="form-control form-control-solid"
                      :accept="field.accept"
                      :required="field.required"
                      @change="handleFileUpload($event, field.name)"
                    />
                    <div v-if="formData[field.name]" class="text-success mt-2 fs-7">
                      <i class="ki-duotone ki-check-circle fs-3">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      {{ formData[field.name].name }}
                    </div>
                  </div>

                </div>
              </div>

              <!-- Section Separator -->
              <div v-if="sectionIndex < formSections.length - 1" class="separator separator-dashed my-8"></div>

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

interface FieldOption {
  label: string
  value: string | number
}

interface FormField {
  name: string
  label: string
  type: 'text' | 'select' | 'radio' | 'date' | 'textarea' | 'number' | 'file' | 'tel'
  colClass: string
  placeholder?: string
  required: boolean
  options?: FieldOption[]
  accept?: string
  hint?: string
  rows?: number
  pattern?: string
}

interface FormSection {
  title?: string
  rows: FormField[][]
}

// ============================================
// DYNAMIC FORM CONFIGURATION
// Yahan se aap easily columns modify kar sakte ho
// ============================================
const formSections = ref<FormSection[]>([
  // ==========================================
  // SECTION 1: PET DETAILS (No title - main section)
  // ==========================================
  {
    rows: [
      // Row 1: 3 Columns (Pet Name, Species, Identification Mark)
      [
        {
          name: 'petName',
          label: 'Pet Name / செல்லப்பிராணியின் பெயர்',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Pet Name',
          required: true
        },
        {
          name: 'species',
          label: 'Species / இனம்',
          type: 'select',
          colClass: 'col-md-4',
          placeholder: 'Select',
          required: true,
          options: [
            { label: 'Dog', value: 'dog' },
            { label: 'Cat', value: 'cat' }
          ]
        },
        {
          name: 'identificationMark',
          label: 'Identification Mark / அடையாளக் குறி',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Identification Mark',
          required: true
        }
      ],

      // Row 2: 3 Columns (Breed, Colour, Sex)
      [
        {
          name: 'breed',
          label: 'Breed / வகை',
          type: 'select',
          colClass: 'col-md-4',
          placeholder: 'Please Select Species',
          required: true,
          options: [
            { label: 'Labrador', value: 'labrador' },
            { label: 'German Shepherd', value: 'german_shepherd' },
            { label: 'Golden Retriever', value: 'golden_retriever' },
            { label: 'Persian', value: 'persian' },
            { label: 'Siamese', value: 'siamese' },
            { label: 'Mixed Breed', value: 'mixed' }
          ]
        },
        {
          name: 'colour',
          label: 'Colour / நிறம்',
          type: 'select',
          colClass: 'col-md-4',
          placeholder: 'Select',
          required: true,
          options: [
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
            { label: 'Brown', value: 'brown' },
            { label: 'Golden', value: 'golden' },
            { label: 'Gray', value: 'gray' },
            { label: 'Mixed', value: 'mixed' }
          ]
        },
        {
          name: 'sex',
          label: 'Sex / பாலினம்',
          type: 'radio',
          colClass: 'col-md-4',
          required: true,
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]
        }
      ],

      // Row 3: 3 Columns (Age Years, Months, Sterilized)
      [
        {
          name: 'ageYears',
          label: 'Age years / வயது வருடம்',
          type: 'select',
          colClass: 'col-md-4',
          placeholder: 'Select',
          required: true,
          options: Array.from({ length: 20 }, (_, i) => ({
            label: `${i + 1}`,
            value: i + 1
          }))
        },
        {
          name: 'ageMonths',
          label: 'Months / மாதம்',
          type: 'select',
          colClass: 'col-md-4',
          placeholder: 'Select',
          required: true,
          options: Array.from({ length: 12 }, (_, i) => ({
            label: `${i + 1}`,
            value: i + 1
          }))
        },
        {
          name: 'isSterilized',
          label: 'Whether the Pet is Sterilized? / செல்லப்பிராணிக்கு கருத்தடை செய்யப்பட்டுள்ளதா?',
          type: 'radio',
          colClass: 'col-md-4',
          required: true,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]
        }
      ],

      // Row 4: 3 Columns (Adopted, ARV Administered, ARV Date)
      [
        {
          name: 'isAdoptedFromStreet',
          label: 'Whether the Pet is adopted from Street? / செல்லப்பிராணி தெருக்களிலிருந்து தத்தெடுக்கப்பட்டதா?',
          type: 'radio',
          colClass: 'col-md-4',
          required: true,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]
        },
        {
          name: 'isARVAdministered',
          label: 'Whether Anti Rabies Vaccination (ARV) is Administered to the Dog? / செல்லப்பிராணிக்கு வெறிநாய்க்கடி தேய் நோய் தடுப்பு ஊசி செலுத்தப்பட்டதா?',
          type: 'radio',
          colClass: 'col-md-4',
          required: true,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]
        },
        {
          name: 'arvDate',
          label: 'ARV Date / தடுப்பூசி தேதி',
          type: 'date',
          colClass: 'col-md-4',
          required: true
        }
      ],

      // Row 5: 3 Columns (De-Worming Date, Other Vaccination, Previous License)
      [
        {
          name: 'deWormingDate',
          label: 'De-Worming Date / புழுக்கொல்லி தேதி',
          type: 'date',
          colClass: 'col-md-4',
          required: false
        },
        {
          name: 'otherVaccination',
          label: 'Other Vaccination / மற்ற தடுப்பூசி',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Other Vaccination',
          required: false
        },
        {
          name: 'previousLicenseNo',
          label: 'Previous License No / முந்தைய உரிம எண்',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Previous License No',
          required: false
        }
      ]
    ]
  },

  // ==========================================
  // SECTION 2: VETERINARIAN DETAILS
  // ==========================================
  {
    title: 'VETERINARIAN DETAILS / கால்நடை மருத்துவர் விவரம்',
    rows: [
      // Row 1: 3 Columns (Dispensary Name, Vet Doctor Name, Mobile Number)
      [
        {
          name: 'dispensaryName',
          label: 'Veterinary Dispensary Name / கால்நடை மருந்தகத்தின் பெயர்',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Dispensary Name',
          required: false
        },
        {
          name: 'vetDoctorName',
          label: 'Veterinary Doctor Name / கால்நடை மருத்துவர் பெயர்',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Doctor Name',
          required: true
        },
        {
          name: 'vetMobileNumber',
          label: 'Mobile Number / தொலைபேசி எண்',
          type: 'tel',
          colClass: 'col-md-4',
          placeholder: 'Mobile Number',
          pattern: '[0-9]{10}',
          required: false
        }
      ],

      // Row 2: 1 Column (Vet Council Number)
      [
        {
          name: 'vetCouncilNumber',
          label: 'Veterinary Council Number / கால்நடை மருத்துவர் கவுன்சில் எண்',
          type: 'text',
          colClass: 'col-md-4',
          placeholder: 'Council Number',
          required: false
        }
      ]
    ]
  },

  // ==========================================
  // SECTION 3: DOCUMENT UPLOADS
  // ==========================================
  {
    title: 'DOCUMENT UPLOADS / ஆவணங்கள் பதிவேற்றம்',
    rows: [
      // Row 1: 2 Columns (Owner Photo, Address Proof)
      [
        {
          name: 'ownerPhoto',
          label: 'Owner Photo / உரிமையாளர் புகைப்படம்',
          type: 'file',
          colClass: 'col-md-6',
          accept: 'image/*',
          hint: '(Max 1 MB)',
          required: true
        },
        {
          name: 'addressProof',
          label: 'Address Proof / முகவரி ஆதாரம்',
          type: 'file',
          colClass: 'col-md-6',
          accept: 'image/*,application/pdf',
          hint: '(Max 1 MB)',
          required: true
        }
      ],

      // Row 2: 2 Columns (Pet Photo, Rabies Certificate)
      [
        {
          name: 'petPhoto',
          label: 'Pet Photo / செல்லப்பிராணியின் புகைப்படம்',
          type: 'file',
          colClass: 'col-md-6',
          accept: 'image/*',
          hint: '(Max 1 MB)',
          required: true
        },
        {
          name: 'rabiesCertificate',
          label: 'Rabies Certificate / வெறிநாய்க்கடி சான்றிதழ்',
          type: 'file',
          colClass: 'col-md-6',
          accept: 'image/*,application/pdf',
          hint: '(Max 1 MB)',
          required: true
        }
      ]
    ]
  }
])

// Form Data - Initialize dynamically based on form configuration
const formData = reactive<Record<string, any>>({})

// Initialize form data
const initializeFormData = () => {
  formSections.value.forEach(section => {
    section.rows.forEach(row => {
      row.forEach(field => {
        formData[field.name] = field.type === 'file' ? null : ''
      })
    })
  })
}

// State
const loading = ref(true)
const submitting = ref(false)
const toasts = ref<Toast[]>([])
let toastIdCounter = 0

// Initialize page with loading state
onMounted(() => {
  initializeFormData()
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
const handleSubmit = async () => {
  // Validate required fields
  let hasError = false
  formSections.value.forEach(section => {
    section.rows.forEach(row => {
      row.forEach(field => {
        if (field.required && !formData[field.name]) {
          hasError = true
        }
      })
    })
  })

  if (hasError) {
    showToast('Please fill all required fields', 'error')
    return
  }

  submitting.value = true
  
  try {
    // Prepare FormData for file uploads
    const submitData = new FormData()
    
    // Add all form fields to FormData
    Object.keys(formData).forEach(key => {
      const value = formData[key]
      
      // Handle file uploads
      if (value instanceof File) {
        submitData.append(key, value)
      } 
      // Handle regular fields
      else if (value !== null && value !== '') {
        submitData.append(key, value)
      }
    })

    // Send to backend API
    const response = await fetch('http://localhost:9000/petapi/pet-register', {
      method: 'POST',
      body: submitData
    })

    const data = await response.json()
    console.log('API Response:', data)

    if (response.ok && data.success) {
      showToast(data.message || 'Pet registration submitted successfully!', 'success')
      
      // Redirect to Laravel backend view page after 1 second
      if (data.data?.redirect_url) {
        setTimeout(() => {
          window.location.href = data.data.redirect_url
        }, 1000)
      }
      
      // Optionally clear form after successful submission (if no redirect)
      if (!data.data?.redirect_url) {
        setTimeout(() => {
          clearForm()
        }, 1500)
      }
    } else {
      // Handle validation errors
      if (data.errors) {
        const errors = Object.values(data.errors).flat()
        showToast(errors[0] as string, 'error')
      } else {
        showToast(data.message || 'Registration failed. Please try again.', 'error')
      }
    }

  } catch (error: any) {
    console.error('Submission error:', error)
    showToast('Network error. Please check your connection and try again.', 'error')
  } finally {
    submitting.value = false
  }
}

// Clear form
const clearForm = () => {
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string' || typeof formData[key] === 'number') {
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