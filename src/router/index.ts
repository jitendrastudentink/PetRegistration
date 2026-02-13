import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/login/login.vue'),
    meta: {
      title: 'Login',
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/registration.vue'),
    meta: {
      title: 'Register',
      requiresAuth: false
    }
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('../views/login/forgot.vue'),
    meta: {
      title: 'Forgot PIN',
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    }
  },
  {
    path: '/pet-details',
    name: 'pet-details',
    component: () => import('../views/Pet/pet-details.vue'),
    meta: {
      title: 'Pet Details',
      requiresAuth: true
    }
  },
  {
    path: '/pet-register',
    name: 'pet-register',
    component: () => import('../views/Pet/pet-register.vue'),
    meta: {
      title: 'Pet Register',
      requiresAuth: true
    }
  },
  {
    path: '/pet-owner-profile',
    name: 'pet-owner-profile',
    component: () => import('../views/Pet/pet-owner-profile.vue'),
    meta: {
      title: 'Pet Owner Profile',
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Pet Registration'

  // Check if route requires authentication
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  // Check if user is logged in with both flag and token
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'
  const hasToken = !!sessionStorage.getItem('accessToken')

  if (requiresAuth && (!isLoggedIn || !hasToken)) {
    // Route requires auth but user is not logged in or has no token
    // Redirect to login page
    next({
      path: '/login',
      query: { redirect: to.fullPath } // Save the original destination
    })
  } else if (!requiresAuth && isLoggedIn && to.path === '/login') {
    // User is logged in but trying to access login page
    // Redirect to dashboard
    next('/dashboard')
  } else {
    // Allow navigation
    next()
  }
})

export default router