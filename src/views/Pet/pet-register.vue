<template>
  <div class="d-flex flex-column flex-column-fluid">
    <div id="kt_app_content" class="app-content flex-column-fluid">
      <div id="kt_app_content_container" class="app-container container-fluid">
        
        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-10">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 text-muted">Loading registration form...</p>
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

        <!-- Iframe Container -->
        <div v-else-if="iframeUrl" class="card">
          <div class="card-header">
            <h3 class="card-title">Pet Registration Form</h3>
            <div class="card-toolbar">
              <button @click="refreshIframe" class="btn btn-sm btn-light-primary">
                <i class="ki-duotone ki-arrows-circle fs-3">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
                Refresh
              </button>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="iframe-container">
              <iframe
                ref="registrationIframe"
                :src="iframeUrl"
                class="registration-iframe"
                frameborder="0"
                allow="camera; microphone; geolocation"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import apiService from '@/services/apiService'

const isLoading = ref(true)
const error = ref('')
const iframeUrl = ref('')
const registrationIframe = ref<HTMLIFrameElement | null>(null)

const fetchRedirectUrl = async () => {
  isLoading.value = true
  error.value = ''
  iframeUrl.value = ''
  
  try {
    const response = await apiService.getPetRegisterRedirect()
    
    if (response.success && response.data.redirect_url) {
      // Set iframe URL instead of redirecting
      iframeUrl.value = response.data.redirect_url
      isLoading.value = false
    } else {
      error.value = response.message || 'Failed to get registration URL'
      isLoading.value = false
    }
  } catch (err: any) {
    console.error('Failed to fetch redirect URL:', err)
    error.value = err.message || 'An error occurred while loading the registration form'
    isLoading.value = false
  }
}

const refreshIframe = () => {
  if (registrationIframe.value) {
    registrationIframe.value.src = registrationIframe.value.src
  }
}

// Listen for messages from iframe (optional - for form submission notifications)
const handleIframeMessage = (event: MessageEvent) => {
  // Add your allowed origins
  const allowedOrigins = ['http://localhost:9000']
  
  if (!allowedOrigins.includes(event.origin)) {
    return
  }
  
  // Handle messages from iframe
  if (event.data.type === 'formSubmitted') {
    console.log('Form submitted successfully')
    // You can show a success message or redirect here
  }
}

onMounted(() => {
  fetchRedirectUrl()
  window.addEventListener('message', handleIframeMessage)
})

onUnmounted(() => {
  window.removeEventListener('message', handleIframeMessage)
})
</script>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
}

.registration-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .iframe-container {
    height: calc(100vh - 150px);
    min-height: 500px;
  }
}
</style>