<template>
  <!--begin::Header-->
  <div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false">
    <!--begin::Header container-->
    <div class="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
      <!--begin::Sidebar mobile toggle-->
      <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
        <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
          <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </div>
      </div>
      <!--end::Sidebar mobile toggle-->
      
      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <router-link to="/dashboard" class="d-lg-none">
          <img alt="Logo" src="/assets/media/logos/default-small.svg" class="h-30px" />
        </router-link>
      </div>
      <!--end::Mobile logo-->
      
      <!--begin::Header wrapper-->
      <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
        <!--begin::Menu wrapper-->
        <div class="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
          <!--begin::Menu-->
          <div class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
            <!-- Add header menu items here if needed -->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->
        
        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">
          <!--begin::Theme mode-->
          <div class="app-navbar-item ms-1 ms-md-4">
            <!--begin::Menu toggle-->
            <a href="#" class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" ref="themeToggle">
              <i class="ki-duotone ki-night-day theme-light-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                <span class="path5"></span>
                <span class="path6"></span>
                <span class="path7"></span>
                <span class="path8"></span>
                <span class="path9"></span>
                <span class="path10"></span>
              </i>
              <i class="ki-duotone ki-moon theme-dark-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </a>
            <!--begin::Menu-->
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu" ref="themeMenu">
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light" @click.prevent="setTheme('light')">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-night-day fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                      <span class="path7"></span>
                      <span class="path8"></span>
                      <span class="path9"></span>
                      <span class="path10"></span>
                    </i>
                  </span>
                  <span class="menu-title">Light</span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark" @click.prevent="setTheme('dark')">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-moon fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">Dark</span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system" @click.prevent="setTheme('system')">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-screen fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </span>
                  <span class="menu-title">System</span>
                </a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Theme mode-->
          
          <!--begin::User menu-->
          <div class="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div 
              class="cursor-pointer symbol symbol-35px" 
              @mouseenter="showUserMenu" 
              @mouseleave="hideUserMenu"
              style="position: relative;"
            >
              <img src="/assets/media/avatars/300-3.jpg" class="rounded-3" alt="user" />
              
              <!--begin::User account menu-->
              <Transition name="fade">
                <div 
                  v-if="isUserMenuVisible"
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" 
                  style="position: absolute; top: 50px; right: 0; z-index: 9999; display: block !important; box-shadow: 0 0 50px 0 rgba(82, 63, 105, 0.15); background: var(--bs-body-bg);"
                  @mouseenter="showUserMenu"
                  @mouseleave="hideUserMenu"
                >
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <div class="menu-content d-flex align-items-center px-3">
                      <!--begin::Avatar-->
                      <div class="symbol symbol-50px me-5">
                        <img alt="Logo" src="/assets/media/avatars/300-3.jpg" />
                      </div>
                      <!--end::Avatar-->
                      <!--begin::Username-->
                      <div class="d-flex flex-column">
                        <div class="fw-bold d-flex align-items-center fs-5">
                          {{ userFullName }}
                          <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                        </div>
                        <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">{{ userEmail }}</a>
                      </div>
                      <!--end::Username-->
                    </div>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu separator-->
                  <div class="separator my-2"></div>
                  <!--end::Menu separator-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                     <router-link class="menu-link" to="/pet-owner-profile">
                        <i class="ki-duotone ki-profile-circle fs-4 me-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                        My Profile
                     </router-link>
                  </div>
                  <div class="separator my-2"></div>
                  <!--end::Menu separator-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-5">
                    <a href="#" @click.prevent="handleLogout" class="menu-link px-5 text-danger">
                      <i class="ki-duotone ki-exit-right fs-4 me-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      Log Out
                    </a>
                  </div>
                  <!--end::Menu item-->
                </div>
              </Transition>
              <!--end::User account menu-->
            </div>
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->
          
          <!--begin::Header menu toggle-->
          <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
            <div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
              <i class="ki-duotone ki-element-4 fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </div>
          </div>
          <!--end::Header menu toggle-->
        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ApiService from '@/services/apiService'
import Swal from 'sweetalert2'

const router = useRouter()
const themeToggle = ref<HTMLElement | null>(null)
const themeMenu = ref<HTMLElement | null>(null)
const isUserMenuVisible = ref(false)
const userData = ref<any>(null)

let themeMenuInstance: any = null
let hideTimeout: any = null

// Computed properties for user info
const userFullName = computed(() => {
  if (userData.value) {
    const firstName = userData.value.first_name || userData.value.firstName || ''
    const lastName = userData.value.last_name || userData.value.lastName || ''
    return `${firstName} ${lastName}`.trim() || ''
  }
  return 'User'
})

const userEmail = computed(() => {
  if (userData.value) {
    return userData.value.email || userData.value.username || 'user@example.com'
  }
  return 'user@example.com'
})

// Load user data from sessionStorage (matching ApiService storage)
const loadUserData = () => {
  try {
    const userStr = sessionStorage.getItem('userData')
    if (userStr) {
      userData.value = JSON.parse(userStr)
      console.log('User data loaded:', userData.value)
    }
  } catch (error) {
    console.error('Error loading user data:', error)
  }
}

const showUserMenu = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  isUserMenuVisible.value = true
}

const hideUserMenu = () => {
  hideTimeout = setTimeout(() => {
    isUserMenuVisible.value = false
  }, 300)
}

const handleProfileClick = () => {
  isUserMenuVisible.value = false
  console.log('Profile clicked')
  // router.push('/profile')
}

const handleSettingsClick = () => {
  isUserMenuVisible.value = false
  console.log('Settings clicked')
  // router.push('/settings')
}

const handleLogout = async () => {
  isUserMenuVisible.value = false
  
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You want to logout from the application?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout!',
    cancelButtonText: 'Cancel'
  })
  
  if (result.isConfirmed) {
    try {
      // Show loading
      Swal.fire({
        title: 'Logging out...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      
      // Use ApiService logout method
      await ApiService.logout()
      
      // Show success message
      await Swal.fire({
        title: 'Logged Out!',
        text: 'You have been successfully logged out.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      })
      
      // Redirect to login
      router.replace('/login')
    } catch (error) {
      console.error('Logout error:', error)
      
      // Even if API call fails, still clear session and redirect
      Swal.fire({
        title: 'Logged Out',
        text: 'Session cleared successfully.',
        icon: 'info',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        router.replace('/login')
      })
    }
  }
}

const setTheme = (mode: string) => {
  if ((window as any).KTThemeMode) {
    (window as any).KTThemeMode.setMode(mode)
  } else {
    let theme = mode
    
    if (mode === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('data-bs-theme', mode)
  }
  
  if (themeMenuInstance) {
    themeMenuInstance.hide()
  }
}

onMounted(() => {
  // Load user data first
  loadUserData()
  
  setTimeout(() => {
    // Initialize Theme Menu
    if (themeMenu.value && (window as any).KTMenu) {
      try {
        themeMenuInstance = (window as any).KTMenu.createInstance(themeMenu.value)
        console.log('Theme menu initialized')
      } catch (e) {
        console.error('Theme menu init error:', e)
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
  if (themeMenuInstance) {
    try {
      themeMenuInstance.dispose()
    } catch (e) {
      console.error('Theme menu cleanup error:', e)
    }
  }

  if (hideTimeout) {
    clearTimeout(hideTimeout)
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>