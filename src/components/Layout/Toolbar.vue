<template>
  <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" 
         class="app-container container-fluid d-flex flex-stack">
      
      <!-- Page title -->
      <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
          {{ pageTitle }}
        </h1>
        
        <!-- Breadcrumb -->
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
          <li class="breadcrumb-item text-muted">
            <router-link to="/dashboard" class="text-muted text-hover-primary">
              Home
            </router-link>
          </li>
          
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-500 w-5px h-2px"></span>
          </li>
          
          <li class="breadcrumb-item text-muted">{{ breadcrumbSection }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
  if (route.meta?.title) {
    return route.meta.title as string
  }
  
  if (route.name) {
    const routeName = route.name.toString()
    const titleMap: Record<string, string> = {
      'dashboard': 'Multipurpose',
 
    }
    
    return titleMap[routeName] || formatRouteName(routeName)
  }
  
  return 'Multipurpose'
})

const breadcrumbSection = computed(() => {
  return 'Dashboards'
})

const formatRouteName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>