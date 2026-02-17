<template>
  <!--begin::Sidebar-->
  <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
    <!--begin::Logo-->
    <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
      <!--begin::Logo image-->
      <router-link to="/dashboard">
        <img alt="Logo" src="/public/logo.png" class="h-25px app-sidebar-logo-default" />
        <img alt="Logo" src="/public/logo.png" class="h-30px app-sidebar-logo-minimize" />
      </router-link>
    
      <div id="kt_app_sidebar_toggle" class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize" @click="toggleSidebarMinimize">
        <i class="ki-duotone ki-black-left-line fs-3 rotate-180">
          <span class="path1"></span>
          <span class="path2"></span>
        </i>
      </div>
      <!--end::Sidebar toggle-->
    </div>
    <!--end::Logo-->
    
    <!--begin::sidebar menu-->
    <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
      <!--begin::Menu wrapper-->
      <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper">
        <!--begin::Scroll wrapper-->
        <div id="kt_app_sidebar_menu_scroll" class="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true" ref="menuScroll">
          <!--begin::Menu-->
          <div class="menu menu-column menu-rounded menu-sub-indention fw-normal fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" ref="sidebarMenu">
            
            <!--begin:Menu item - Dashboard-->
            <div class="menu-item">
              <router-link class="menu-link" to="/dashboard">
                <span class="menu-icon">
                  <i class="ki-duotone ki-element-11 fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </i>
                </span>
                <span class="menu-title">Dashboard</span>
              </router-link>
            </div>
            <!--end:Menu item-->
            
            <!--begin:Menu item - Pet Registration-->
            <div class="menu-item">
              <router-link class="menu-link" to="/pet-register">
                <span class="menu-icon">
                  <i class="ki-duotone ki-user-tick fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>
                </span>
                <span class="menu-title">Pet Registration</span>
              </router-link>
            </div>
            <!--end:Menu item-->
            
            <!--begin:Menu item - Pet Details-->
            <div class="menu-item">
              <router-link class="menu-link" to="/pet-details">
                <span class="menu-icon">
                  <i class="ki-duotone ki-document fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <span class="menu-title">Pet Details</span>
              </router-link>
            </div>
            <!--end:Menu item-->
            
            <!--begin:Menu item - Pet Owner Profile-->
            <!-- <div class="menu-item">
              <router-link class="menu-link" to="/pet-owner-profile">
                <span class="menu-icon">
                  <i class="ki-duotone ki-profile-user fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </i>
                </span>
                <span class="menu-title">My Profile</span>
              </router-link>
            </div> -->
            <!--end:Menu item-->
            
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Scroll wrapper-->
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::sidebar menu-->
    
    <!--begin::Footer-->
    <!-- <div class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
      <a href="https://preview.keenthemes.com/html/metronic/docs" class="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" title="200+ in-house components and 3rd-party plugins">
        <span class="btn-label">User Name</span>
        <i class="ki-duotone ki-document btn-icon fs-2 m-0">
          <span class="path1"></span>
          <span class="path2"></span>
        </i>
      </a>
    </div> -->
    <!--end::Footer-->
  </div>
  <!--end::Sidebar-->
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sidebarMenu = ref<HTMLElement | null>(null)
const menuScroll = ref<HTMLElement | null>(null)

// Single state to track which menu is active (only one at a time)
const activeMenu = ref<string>('dashboard')

let menuInstance: any = null
let scrollInstance: any = null

// Toggle sidebar minimize
const toggleSidebarMinimize = () => {
  const body = document.body
  
  if (body.classList.contains('app-sidebar-minimize')) {
    body.classList.remove('app-sidebar-minimize')
    body.setAttribute('data-kt-app-sidebar-minimize', 'off')
  } else {
    body.classList.add('app-sidebar-minimize')
    body.setAttribute('data-kt-app-sidebar-minimize', 'on')
  }

  const isMinimized = body.classList.contains('app-sidebar-minimize')
  localStorage.setItem('kt_app_sidebar_minimize_state', isMinimized ? 'on' : 'off')
}

// Toggle menu - only one menu can be open at a time
const toggleMenu = (menuName: string) => {
  if (activeMenu.value === menuName) {
    // If clicking the same menu, close it
    activeMenu.value = ''
  } else {
    // Open the clicked menu and close others
    activeMenu.value = menuName
  }
  
  // Save active menu state
  localStorage.setItem('kt_active_menu', activeMenu.value)
}

// Detect which menu should be active based on current route
const detectActiveMenu = () => {
  const path = route.path.toLowerCase()
  
  if (path.includes('/dashboard')) {
    activeMenu.value = 'dashboard'
  }
}

// Watch route changes to update active menu
watch(() => route.path, () => {
  detectActiveMenu()
}, { immediate: true })

onMounted(() => {
  // Restore sidebar minimize state
  const savedState = localStorage.getItem('kt_app_sidebar_minimize_state')
  if (savedState === 'on') {
    document.body.classList.add('app-sidebar-minimize')
    document.body.setAttribute('data-kt-app-sidebar-minimize', 'on')
  }
  
  // Restore active menu state or detect from current route
  const savedMenu = localStorage.getItem('kt_active_menu')
  if (savedMenu) {
    activeMenu.value = savedMenu
  } else {
    detectActiveMenu()
  }
  
  // Initialize Metronic components
  setTimeout(() => {
    if (sidebarMenu.value && (window as any).KTMenu) {
      try {
        menuInstance = (window as any).KTMenu.createInstance(sidebarMenu.value)
        console.log('Sidebar menu initialized')
      } catch (e) {
        console.error('Menu init error:', e)
      }
    }

    if (menuScroll.value && (window as any).KTScroll) {
      try {
        scrollInstance = (window as any).KTScroll.createInstance(menuScroll.value)
        console.log('Menu scroll initialized')
      } catch (e) {
        console.error('Scroll init error:', e)
      }
    }

    // Initialize tooltips
    if ((window as any).$ && (window as any).$.fn.tooltip) {
      try {
        (window as any).$('[data-bs-toggle="tooltip"]').tooltip()
      } catch (e) {
        console.error('Tooltip init error:', e)
      }
    }
  }, 100)
})

onUnmounted(() => {
  if (menuInstance) {
    try {
      menuInstance.dispose()
    } catch (e) {
      console.error('Menu cleanup error:', e)
    }
  }

  if (scrollInstance) {
    try {
      scrollInstance.dispose()
    } catch (e) {
      console.error('Scroll cleanup error:', e)
    }
  }

  if ((window as any).$ && (window as any).$.fn.tooltip) {
    try {
      (window as any).$('[data-bs-toggle="tooltip"]').tooltip('dispose')
    } catch (e) {
      console.error('Tooltip cleanup error:', e)
    }
  }
})
</script>

<style scoped>
/* Menu accordion animation */
.menu-sub-accordion {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.menu-sub-accordion.show {
  max-height: 1000px;
}

.menu-item.show > .menu-link .menu-arrow::after {
  transform: rotate(90deg);
}
</style>