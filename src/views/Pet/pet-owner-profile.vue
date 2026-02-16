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
        <p class="text-muted mt-3">Loading your profile...</p>
      </div>

      <div v-else>
        <!-- Owner Profile Form Card -->
        <div class="card">
          <div class="card-header bg-primary">
            <div class="d-flex justify-content-between align-items-center w-100">
              <h3 class="card-title fw-bold text-white mb-0">
                <i class="ki-duotone ki-user fs-2 me-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
                Owner Profile
              </h3>
              
              <!-- Edit/Save/Cancel Buttons -->
              <div class="d-flex gap-2">
                <!-- Edit Button -->
                <button 
                  v-if="!isEditing"
                  type="button" 
                  class="btn btn-light btn-sm"
                  @click="enableEdit"
                >
                  <i class="ki-duotone ki-pencil fs-3">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Edit Profile
                </button>

                <!-- Save Button -->
                <button 
                  v-if="isEditing"
                  type="button" 
                  class="btn btn-success btn-sm"
                  @click="saveProfile"
                  :disabled="submitting"
                >
                  <span v-if="!submitting">
                    <i class="ki-duotone ki-check fs-3 me-1">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    Save
                  </span>
                  <span v-else>
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </span>
                </button>

                <!-- Cancel Button -->
                <button 
                  v-if="isEditing"
                  type="button" 
                  class="btn btn-secondary btn-sm"
                  @click="cancelEdit"
                  :disabled="submitting"
                >
                  <i class="ki-duotone ki-cross fs-3 me-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <!-- Cat and Dog Images -->
          <div class="pet-images-header">
            <div class="pet-images-container">
              <div class="pet-image-wrapper cat-wrapper">
                <img 
                  src="/public/cat-sting.png" 
                  alt="Cat" 
                  class="pet-header-image cat-image"
                >
              </div>
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
            <!-- Edit Mode Indicator -->
            <div v-if="isEditing" class="alert alert-info d-flex align-items-center mb-6">
              <i class="ki-duotone ki-information-5 fs-2x me-3">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
              </i>
              <div>
                <h5 class="mb-1">Edit Mode Active</h5>
                <p class="mb-0">Update your information and click Save to apply changes.</p>
              </div>
            </div>

            <form @submit.prevent="saveProfile">
              
              <!-- Basic Information -->
              <div class="mb-8">
                <div class="d-flex align-items-center mb-4">
                  <i class="ki-duotone ki-profile-user fs-2 me-2 text-primary">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>
                  <h4 class="text-gray-800 mb-0">Basic Information</h4>
                </div>
                
                <div class="row mb-6">
                  <!-- Title -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Title</label>
                    <select 
                      v-model="formData.title" 
                      class="form-select"
                      :class="isEditing ? 'form-select-solid' : 'form-select-solid bg-light'"
                      :disabled="!isEditing"
                    >
                      <option value="">Select Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>

                  <!-- Owner Name -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">
                      Owner Name <span class="text-danger">*</span>
                    </label>
                    <input 
                      v-model="formData.ownerName" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter owner name"
                      :readonly="!isEditing"
                      required
                    />
                  </div>

                  <!-- Mobile Number -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">
                      Mobile Number <span class="text-danger">*</span>
                    </label>
                    <input 
                      v-model="formData.mobileNumber" 
                      type="tel" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="10-digit mobile number"
                      maxlength="10"
                      :readonly="!isEditing"
                      required
                    />
                  </div>

                  <!-- Email -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Email Id</label>
                    <input 
                      v-model="formData.emailId" 
                      type="email" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter email address"
                      :readonly="!isEditing"
                    />
                  </div>
                </div>
              </div>

              <!-- Address Information -->
              <div class="separator my-6"></div>
              
              <div class="mb-6">
                <div class="d-flex align-items-center mb-4">
                  <i class="ki-duotone ki-geolocation fs-2 me-2 text-primary">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <h4 class="text-gray-800 mb-0">Address Information</h4>
                </div>
                
                <div class="row">
                  <!-- Zone -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Zone</label>
                    <input 
                      v-model="formData.zone" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter zone"
                      :readonly="!isEditing"
                    />
                  </div>

                  <!-- Ward -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Ward</label>
                    <input 
                      v-model="formData.ward" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter ward"
                      :readonly="!isEditing"
                    />
                  </div>

                  <!-- Street Name -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Street Name</label>
                    <input 
                      v-model="formData.streetName" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter street name"
                      :readonly="!isEditing"
                    />
                  </div>

                  <!-- Door No -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Door No</label>
                    <input 
                      v-model="formData.doorNo" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter door number"
                      :readonly="!isEditing"
                    />
                  </div>

                  <!-- Locality -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">Locality / Building Name</label>
                    <input 
                      v-model="formData.locality" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="Enter locality"
                      :readonly="!isEditing"
                    />
                  </div>

                  <!-- PIN Code -->
                  <div class="col-md-4 mb-4">
                    <label class="form-label fw-semibold text-gray-600">PIN Code</label>
                    <input 
                      v-model="formData.pinCode" 
                      type="text" 
                      class="form-control"
                      :class="isEditing ? 'form-control-solid' : 'form-control-solid bg-light'"
                      placeholder="6-digit PIN code"
                      maxlength="6"
                      :readonly="!isEditing"
                    />
                  </div>
                </div>
              </div>

              <!-- Bottom Buttons (when editing) -->
              <div v-if="isEditing" class="d-flex justify-content-center gap-3 mt-8">
                <button 
                  type="submit" 
                  class="btn btn-primary btn-lg px-10" 
                  :disabled="submitting"
                >
                  <span v-if="!submitting">
                    <i class="ki-duotone ki-check fs-3 me-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    Save All Changes
                  </span>
                  <span v-else>
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </span>
                </button>
                <button 
                  type="button" 
                  class="btn btn-light btn-lg px-10" 
                  @click="cancelEdit"
                  :disabled="submitting"
                >
                  Cancel
                </button>
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
import ApiService from '@/services/apiService'

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

// Backup for cancel
const originalData = reactive({
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
const isEditing = ref(false)
const toasts = ref<Toast[]>([])
let toastIdCounter = 0

// Toast functions
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const id = ++toastIdCounter
  toasts.value.push({ id, message, type })
  
  setTimeout(() => {
    removeToast(id)
  }, 5000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

// Enable edit mode
const enableEdit = () => {
  console.log('🔓 Enabling edit mode...')
  isEditing.value = true
  // Backup original data
  Object.assign(originalData, formData)
  showToast('Edit mode enabled. Make your changes and click Save.', 'success')
}

// Cancel edit
const cancelEdit = () => {
  console.log('❌ Canceling edit...')
  // Restore original data
  Object.assign(formData, originalData)
  isEditing.value = false
  showToast('Changes cancelled', 'success')
}

// Fetch profile
const fetchOwnerProfile = async () => {
  loading.value = true
  try {
    console.log('📥 Fetching owner profile...')
    const response = await ApiService.getOwnerProfile()
    
    if (response.success && response.data) {
      console.log('✅ Profile data received:', response.data)
      
      // Populate form
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
      
      // Backup
      Object.assign(originalData, formData)
      
      console.log('✅ Form populated:', formData)
    } else {
      showToast(response.message || 'No profile data found', 'error')
    }
  } catch (error: any) {
    console.error('❌ Error fetching profile:', error)
    showToast(error.response?.data?.message || 'Failed to load profile', 'error')
  } finally {
    loading.value = false
  }
}

// Save profile
const saveProfile = async () => {
  console.log('💾 Saving profile...', formData)
  
  // Validation
  if (!formData.ownerName || formData.ownerName.trim() === '') {
    showToast('Owner name is required', 'error')
    return
  }

  if (!formData.mobileNumber || formData.mobileNumber.trim() === '') {
    showToast('Mobile number is required', 'error')
    return
  }

  if (formData.mobileNumber.length !== 10) {
    showToast('Mobile number must be 10 digits', 'error')
    return
  }

  if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
    showToast('Mobile number must contain only digits', 'error')
    return
  }

  if (formData.pinCode && formData.pinCode.length > 0 && formData.pinCode.length !== 6) {
    showToast('PIN code must be 6 digits', 'error')
    return
  }

  if (formData.emailId && formData.emailId.trim() !== '' && !formData.emailId.includes('@')) {
    showToast('Please enter a valid email address', 'error')
    return
  }

  submitting.value = true
  
  try {
    console.log('📤 Sending update request...')
    const response = await ApiService.updateOwnerProfile(formData)
    
    console.log('📥 Response received:', response)
    
    if (response.success) {
      showToast('✅ Profile updated successfully!', 'success')
      
      // Update backup
      Object.assign(originalData, formData)
      
      // Exit edit mode
      isEditing.value = false
      
      // Reload profile
      await fetchOwnerProfile()
    } else {
      showToast(response.message || 'Failed to update profile', 'error')
    }
  } catch (error: any) {
    console.error('❌ Error updating profile:', error)
    const errorMessage = error.response?.data?.message || error.message || 'Failed to update profile'
    showToast(errorMessage, 'error')
  } finally {
    submitting.value = false
  }
}

// Load on mount
onMounted(() => {
  console.log('🚀 Component mounted, loading profile...')
  fetchOwnerProfile()
})
</script>

<style scoped>
.card-header.bg-primary {
  background: linear-gradient(135deg, #1e1e2d 0%, #2d2d3f 100%) !important;
  padding: 1.25rem 1.5rem;
}

.card-header.bg-primary .card-title {
  color: #ffffff !important;
}

.form-control.bg-light,
.form-select.bg-light {
  background-color: #f5f8fa !important;
  cursor: not-allowed;
}

.form-control:not(.bg-light):focus,
.form-select:not(.bg-light):focus {
  border-color: #009ef7;
  box-shadow: 0 0 0 0.2rem rgba(0, 158, 247, 0.25);
}

.separator {
  border-bottom: 2px solid #e4e6ef;
}

.alert-info {
  background-color: #f1faff;
  border: 1px solid #b3e5fc;
  color: #01579b;
}

/* Pet Images */
.pet-images-header {
  padding: 1.5rem 0 1rem 0;
  position: relative;
  display: flex;
  justify-content: center;
}

.pet-images-container {
  display: flex;
  justify-content: center;
  gap: 50%;
  width: 100%;
  position: relative;
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

/* Toast */
.toast {
  min-width: 350px;
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

.rotating-spinner {
  width: 60px;
  height: 60px;
  animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .pet-header-image {
    max-width: 120px;
  }
}
</style>