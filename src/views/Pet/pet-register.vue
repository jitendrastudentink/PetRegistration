<template>
  <div class="d-flex flex-column flex-column-fluid">
    <div id="kt_app_content" class="app-content flex-column-fluid">
      <div id="kt_app_content_container" class="app-container container-xxl">
        
        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-10">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 text-muted">Loading your details...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="alert alert-danger d-flex align-items-center p-5">
          <i class="ki-duotone ki-shield-tick fs-2hx text-danger me-4">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <div class="d-flex flex-column">
            <h4 class="mb-1 text-danger">Unable to Load Registration Form</h4>
            <span>{{ error }}</span>
            <button @click="fetchRedirectUrl" class="btn btn-sm btn-light-primary mt-3 align-self-start">
              Try Again
            </button>
          </div>
        </div>

        <!-- Success - Iframe Display -->
        <div v-else-if="redirectUrl" class="card">
          <div class="card-header">
            <h3 class="card-title">Pet Registration Form</h3>
            <div class="card-toolbar">
              <span v-if="isExisting" class="badge badge-light-info me-2">
                <i class="fas fa-history me-1"></i>
                Existing Registration
              </span>
              <span class="badge badge-light-success">
                <i class="fas fa-user-check me-1"></i>
                {{ userData?.ownerName || 'User' }}
              </span>
            </div>
          </div>
          <div class="card-body p-0">
            <!-- Info Alert for Existing Users -->
            <div v-if="isExisting" class="alert alert-info m-5 d-flex align-items-center">
              <i class="fas fa-info-circle fs-2x me-3"></i>
              <div>
                <h5 class="mb-1">Welcome Back!</h5>
                <p class="mb-0">We found your previous registration. Your information has been pre-filled.</p>
              </div>
            </div>
            
            <iframe 
              ref="formIframe"
              :src="redirectUrl" 
              class="w-100"
              style="min-height: 800px; border: none;"
              title="Pet Registration Form"
              @load="onIframeLoad"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import apiService from '@/services/apiService'

const isLoading = ref(true)
const error = ref('')
const redirectUrl = ref('')
const userData = ref<any>(null)
const isExisting = ref(false)
const formIframe = ref<HTMLIFrameElement | null>(null)

const fetchRedirectUrl = async () => {
  isLoading.value = true
  error.value = ''
  
  try {
    const response = await apiService.getPetRegisterRedirect()
    
    if (response.success && response.data.redirect_url) {
      redirectUrl.value = response.data.redirect_url
      userData.value = response.data.user_data
      isExisting.value = response.data.is_existing || false
      
      console.log('User data pre-filled:', userData.value)
      console.log('Is existing registration:', isExisting.value)
    } else {
      error.value = response.message || 'Failed to get registration URL'
    }
  } catch (err: any) {
    console.error('Failed to fetch redirect URL:', err)
    error.value = err.message || 'An error occurred while loading the registration form'
  } finally {
    isLoading.value = false
  }
}

const onIframeLoad = () => {
  console.log('Form loaded successfully')
}

onMounted(() => {
  fetchRedirectUrl()
})
</script>