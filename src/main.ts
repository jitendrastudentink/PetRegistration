import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Theme mode setup
const defaultThemeMode = "light"
let themeMode: string

if (document.documentElement) {
  if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
    themeMode = document.documentElement.getAttribute("data-bs-theme-mode")!
  } else {
    if (localStorage.getItem("data-bs-theme") !== null) {
      themeMode = localStorage.getItem("data-bs-theme")!
    } else {
      themeMode = defaultThemeMode
    }
  }
  
  if (themeMode === "system") {
    themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  
  document.documentElement.setAttribute("data-bs-theme", themeMode)
}

// Set body attributes for app-sidebar layout
document.body.setAttribute('id', 'kt_app_body')
document.body.setAttribute('data-kt-app-layout', 'dark-sidebar')
document.body.setAttribute('data-kt-app-header-fixed', 'true')
document.body.setAttribute('data-kt-app-sidebar-enabled', 'true')
document.body.setAttribute('data-kt-app-sidebar-fixed', 'true')
document.body.setAttribute('data-kt-app-sidebar-hoverable', 'true')
document.body.setAttribute('data-kt-app-sidebar-push-header', 'true')
document.body.setAttribute('data-kt-app-sidebar-push-toolbar', 'true')
document.body.setAttribute('data-kt-app-sidebar-push-footer', 'true')
document.body.setAttribute('data-kt-app-toolbar-enabled', 'true')
document.body.className = 'app-default'

// Create and mount Vue app
const app = createApp(App)
app.use(router)
app.mount('#app')

// Metronic initialization
let isInitializing = false

async function waitForMetronic(maxWaitTime = 5000): Promise<boolean> {
  const startTime = Date.now()
  
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if ((window as any).KTMenu !== undefined) {
        clearInterval(checkInterval)
        resolve(true)
      } else if (Date.now() - startTime > maxWaitTime) {
        clearInterval(checkInterval)
        resolve(false)
      }
    }, 50)
  })
}

async function initializeMetronicComponents() {
  if (isInitializing) {
    return
  }

  isInitializing = true
  try {
    const loaded = await waitForMetronic()
    if (!loaded) {
      console.warn('Metronic libraries not loaded in time')
      return
    }

    // Initialize all menus
    const menus = document.querySelectorAll('[data-kt-menu="true"]')
    menus.forEach(el => {
      try {
        (window as any).KTMenu.createInstance(el)
      } catch (e) {
        console.error('Menu init error:', e)
      }
    })

    // Initialize all drawers
    const drawers = document.querySelectorAll('[data-kt-drawer="true"]')
    drawers.forEach(el => {
      try {
        (window as any).KTDrawer.createInstance(el)
      } catch (e) {
        console.error('Drawer init error:', e)
      }
    })

    // Initialize scrolltop
    if ((window as any).KTScrolltop) {
      const scrolltop = document.querySelector('#kt_scrolltop')
      if (scrolltop) {
        try {
          (window as any).KTScrolltop.createInstance(scrolltop)
        } catch (e) {
          console.error('Scrolltop init error:', e)
        }
      }
    }

    // Initialize all scroll elements
    if ((window as any).KTScroll) {
      const scrollElements = document.querySelectorAll('[data-kt-scroll="true"]')
      scrollElements.forEach(el => {
        try {
          (window as any).KTScroll.createInstance(el)
        } catch (e) {
          console.error('Scroll init error:', e)
        }
      })
    }

    // Initialize sticky elements
    if ((window as any).KTSticky) {
      const stickyElements = document.querySelectorAll('[data-kt-sticky="true"]')
      stickyElements.forEach(el => {
        try {
          (window as any).KTSticky.createInstance(el)
        } catch (e) {
          console.error('Sticky init error:', e)
        }
      })
    }

    console.log('✅ Metronic components initialized successfully')
  } catch (error) {
    console.error('❌ Error initializing Metronic components:', error)
  } finally {
    isInitializing = false
  }
}

// Initialize after each route change
router.afterEach(() => {
  setTimeout(() => {
    initializeMetronicComponents()
  }, 100)
})

// Initial initialization
initializeMetronicComponents()