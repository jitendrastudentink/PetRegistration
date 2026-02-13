<template>
  <!-- Show only router-view for login/auth pages (no layout) -->
  <div v-if="isBlankLayout">
    <router-view />
  </div>

  <!-- Show full layout for authenticated pages -->
  <div v-else class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <!--begin::Header-->
      <Header />
      <!--end::Header-->
      
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <!--begin::Sidebar-->
        <Sidebar />
        <!--end::Sidebar-->
        
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Toolbar-->
            <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
              <!--begin::Toolbar container-->
              <div id="kt_app_toolbar_container" class="app-container container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  <!--begin::Title-->
                  <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">{{ pageTitle }}</h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                  <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                      <router-link to="/dashboard" class="text-muted text-hover-primary">Home</router-link>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-500 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">{{ pageTitle }}</li>
                    <!--end::Item-->
                  </ul>
                  <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
              </div>
              <!--end::Toolbar container-->
            </div>
            <!--end::Toolbar-->
            
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <!--begin::Content container-->
              <div id="kt_app_content_container" class="app-container container-fluid">
                <!--begin::Router Content-->
                <router-view />
                <!--end::Router Content-->
              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
          
          <!--begin::Footer-->
          <Footer />
          <!--end::Footer-->
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
    
    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
      <i class="ki-duotone ki-arrow-up">
        <span class="path1"></span>
        <span class="path2"></span>
      </i>
    </div>
    <!--end::Scrolltop-->
  </div>
  <!--end::App-->
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Layout/Sidebar.vue'
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'

const route = useRoute()

// Check if current route should have blank layout (no header/footer/sidebar)
const isBlankLayout = computed(() => {
  // Routes that should NOT have layout
  const blankRoutes = [
    '/login', 
    '/register', 
    '/forgot', 
    '/reset-password',
    '/auth/callback'
  ]
  return blankRoutes.includes(route.path) || route.meta?.layout === 'blank'
})

const pageTitle = computed(() => {
  if (route.meta?.title) {
    return route.meta.title as string
  }
  
  if (route.name) {
    const routeName = route.name.toString()
    const titleMap: Record<string, string> = {
      'dashboard': 'Dashboard',
 
    }
    
    return titleMap[routeName] || formatRouteName(routeName)
  }
  
  return 'Dashboard'
})

const formatRouteName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Clean up body classes on route change
watch(() => route.path, (newPath) => {
  const blankLayoutPaths = [
    '/login', 
    '/register', 
    '/forgot', 
    '/reset-password',
    '/auth/callback'
  ]
  
  if (blankLayoutPaths.includes(newPath)) {
    document.body.classList.remove('app-sidebar-minimize')
  }
})

onMounted(() => {
  // Initialize Scrolltop only for non-blank layouts
  if (!isBlankLayout.value) {
    setTimeout(() => {
      if ((window as any).KTScrolltop) {
        const scrolltop = document.querySelector('#kt_scrolltop')
        if (scrolltop) {
          try {
            (window as any).KTScrolltop.createInstance(scrolltop)
            console.log('Scrolltop initialized')
          } catch (e) {
            console.error('Scrolltop init error:', e)
          }
        }
      }
    }, 100)
  }
})
</script>

<style>
@import url('../public/assets/plugins/global/plugins.bundle.css');
@import url('../public/assets/css/style.bundle.css');

#app {
  min-height: 100vh;
}

/* Ensure proper body attributes for app-sidebar layout */
body {
  --kt-app-layout: dark-sidebar;
  --kt-app-header-fixed: true;
  --kt-app-sidebar-enabled: true;
  --kt-app-sidebar-fixed: true;
  --kt-app-sidebar-hoverable: true;
  --kt-app-sidebar-push-header: true;
  --kt-app-sidebar-push-toolbar: true;
  --kt-app-sidebar-push-footer: true;
  --kt-app-toolbar-enabled: true;
}

/* Sidebar minimize state */
body.app-sidebar-minimize .app-sidebar {
  width: 75px;
}

body.app-sidebar-minimize .app-sidebar-logo-default {
  display: none;
}

body.app-sidebar-minimize .app-sidebar-logo-minimize {
  display: inline-block;
}

body:not(.app-sidebar-minimize) .app-sidebar-logo-minimize {
  display: none;
}

body:not(.app-sidebar-minimize) .app-sidebar-logo-default {
  display: inline-block;
}
</style>