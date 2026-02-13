<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-fluid">
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-10">
        <img 
          src="/public/Tambaram_Corporation_new_logo.jpg" 
          alt="Loading..." 
          class="rotating-spinner"
        >
      </div>

      <div v-else>
        <!-- Owner Profile Form Card -->
        <div class="card">
        <div class="card-header bg-primary">
          <div class="d-flex justify-content-between align-items-center w-100">
            <h3 class="card-title fw-bold text-white mb-0">
              Owner Profile
            </h3>
            <button type="button" class="btn btn-light btn-sm">
              <i class="ki-duotone ki-pencil fs-3">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              Edit
            </button>
          </div>
        </div>

        <!-- Cat and Dog Images Section - Top Center -->
        <div class="pet-images-header">
          <div class="pet-images-container">
            <!-- Cat Image (Left) -->
            <div class="pet-image-wrapper cat-wrapper">
              <img 
                src="/public/cat-sting.png" 
                alt="Cat" 
                class="pet-header-image cat-image"
              >
            </div>
            
            <!-- Dog Image (Right) -->
            <div class="pet-image-wrapper dog-wrapper">
              <img 
                src="/public/dog-sting.png" 
                alt="Dog" 
                class="pet-header-image dog-image"
              >
            </div>
          </div>
        </div>

        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            
            <!-- Row 1: Title, Owner Name, Mobile Number -->
            <div class="row mb-6">
              <!-- Title -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Title
                </label>
                <select 
                  v-model="formData.title" 
                  class="form-select form-select-solid"
                >
                  <option value="">Select</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="ms">Ms</option>
                  <option value="dr">Dr</option>
                </select>
              </div>

              <!-- Owner Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Owner Name
                </label>
                <input 
                  v-model="formData.ownerName" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter owner name"
                />
              </div>

              <!-- Mobile Number -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Mobile Number
                </label>
                <input 
                  v-model="formData.mobileNumber" 
                  type="tel" 
                  class="form-control form-control-solid" 
                  placeholder="Enter mobile number"
                  pattern="[0-9]{10}"
                  maxlength="10"
                />
              </div>
            </div>

            <!-- Row 2: Email ID, Zone, Ward -->
            <div class="row mb-6">
              <!-- Email ID -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Email Id
                </label>
                <input 
                  v-model="formData.emailId" 
                  type="email" 
                  class="form-control form-control-solid" 
                  placeholder="Enter email address"
                />
              </div>

              <!-- Zone -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Zone
                </label>
                <input 
                  v-model="formData.zone" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter zone"
                />
              </div>

              <!-- Ward -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Ward
                </label>
                <input 
                  v-model="formData.ward" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter ward"
                />
              </div>
            </div>

            <!-- Row 3: Street Name, Door No, Locality -->
            <div class="row mb-6">
              <!-- Street Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Street Name
                </label>
                <input 
                  v-model="formData.streetName" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter street name"
                />
              </div>

              <!-- Door No -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Door No
                </label>
                <input 
                  v-model="formData.doorNo" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter door number"
                />
              </div>

              <!-- Locality / Building Name -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600">
                  Locality / Building Name
                </label>
                <input 
                  v-model="formData.locality" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter locality/building name"
                />
              </div>
            </div>

            <!-- Row 4: PIN Code -->
            <div class="row mb-6">
              <!-- PIN Code -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-gray-600 bg-light px-2 py-1">
                  PIN Code
                </label>
                <input 
                  v-model="formData.pinCode" 
                  type="text" 
                  class="form-control form-control-solid" 
                  placeholder="Enter PIN code"
                  pattern="[0-9]{6}"
                  maxlength="6"
                />
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
import ApiService from '@/services/ApiService'

interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
}

// Form Data
const formData = reactive({
  title: '',
  ownerName: '',
  mobileNumber: '',
  emailId: '',
  zone: '',
  ward: '',
  streetName: '',
  doorNo: '',
  locality: '',
  pinCode: ''
})

// State
const loading = ref(false)
const submitting = ref(false)
const toasts = ref<Toast[]>([])
let toastIdCounter = 0

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

// Fetch owner profile from API
const fetchOwnerProfile = async () => {
  loading.value = true
  try {
    const response = await ApiService.getOwnerProfile()
    
    if (response.success && response.data) {
      // Populate form with API data - only set values that exist
      formData.title = response.data.title || ''
      formData.ownerName = response.data.ownerName || ''
      formData.mobileNumber = response.data.mobileNumber || ''
      formData.emailId = response.data.emailId || ''
      formData.zone = response.data.zone || ''
      formData.ward = response.data.ward || ''
      formData.streetName = response.data.streetName || ''
      formData.doorNo = response.data.doorNo || ''
      formData.locality = response.data.locality || ''
      formData.pinCode = response.data.pinCode || ''
      
      console.log('Profile loaded:', formData)
    } else {
      showToast('No profile data found', 'error')
    }
  } catch (error) {
    console.error('Error fetching owner profile:', error)
    showToast('Failed to load profile data', 'error')
  } finally {
    loading.value = false
  }
}

// Submit form - RELAXED VALIDATION
const handleSubmit = async () => {
  // Basic validation - only check if mobile number format is correct IF provided
  if (formData.mobileNumber && formData.mobileNumber.length !== 10) {
    showToast('Mobile number must be 10 digits', 'error')
    return
  }

  // Validate PIN code format IF provided
  if (formData.pinCode && formData.pinCode.length !== 6) {
    showToast('PIN code must be 6 digits', 'error')
    return
  }

  // Validate email format IF provided
  if (formData.emailId && !formData.emailId.includes('@')) {
    showToast('Please enter a valid email address', 'error')
    return
  }

  submitting.value = true
  
  try {
    const response = await ApiService.updateOwnerProfile(formData)
    
    if (response.success) {
      showToast('Profile updated successfully!', 'success')
      // Optionally reload the profile data
      await fetchOwnerProfile()
    } else {
      showToast(response.message || 'Failed to update profile', 'error')
    }
  } catch (error: any) {
    console.error('Error updating profile:', error)
    const errorMessage = error.message || 'Failed to update profile'
    showToast(errorMessage, 'error')
  } finally {
    submitting.value = false
  }
}

// Clear form
const clearForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key as keyof typeof formData] = ''
  })
  
  showToast('Form cleared', 'success')
}

// Load data on mount
onMounted(() => {
  fetchOwnerProfile()
})
</script>

<style scoped>
.form-label.required::after {
  content: ' *';
  color: #f1416c;
}

.card-header.bg-primary {
  background: linear-gradient(135deg, #1e1e2d 0%, #2d2d3f 100%) !important;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.card-header.bg-primary .card-title {
  color: #ffffff !important;
  font-size: 1.1rem;
}

.form-label {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.form-label.bg-light {
  display: inline-block;
  border-radius: 4px;
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

/* Pet Images Header Section - Top Center */
.pet-images-header {
  padding: 1.5rem 0 1rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
}

.pet-images-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 50%;
  width: 100%;
  max-width: 100%;
  position: relative;
}

.pet-image-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.cat-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
}

.dog-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
}

.pet-header-image {
  max-width: 180px;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-inline: 560px;
}

.cat-image {
  animation: fadeInUp 0.8s ease-out;
}

.dog-image {
  animation: fadeInUp 0.8s ease-out 0.2s;
  animation-fill-mode: backwards;
}

.pet-header-image:hover {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
  
  .pet-header-image {
    max-width: 120px;
  }
  
  .pet-images-header {
    padding: 1rem 0 0.5rem 0;
  }
}

@media (max-width: 576px) {
  .pet-header-image {
    max-width: 80px;
  }
}
</style>