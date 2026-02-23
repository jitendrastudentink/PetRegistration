<template>
  <!-- ================= LOADER OVERLAY ================= -->
  <div v-if="isLoading" class="loader-overlay">
    <div class="loader-box text-center">
      <div class="spinner-big"></div>
      <div class="loading-text mt-4">
        Loading... {{ progress }}%
      </div>
    </div>
  </div>

  <!-- ================= DASHBOARD ================= -->
  <div class="dashboard-wrapper">
    <!-- Animated Background SVG -->
    <svg class="dashboard-bg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin slice" viewBox="0 0 700 700">
      <g mask="url(&quot;#SvgjsMask1108&quot;)" fill="none">
        <path d="M350 46.32C309.83 46.32 289.24 110.49 289.24 175C289.24 241.12 309.65 307.58 350 307.58C399.15 307.58 468.24 240.85 468.24 175C468.24 110.22 399.33 46.32 350 46.32" stroke="rgba(59, 130, 246, 0.3)" stroke-width="2"></path>
        <path d="M175 479.71C143.61 479.71 121.65 492.24 115.77 525C101.89 602.38 168.2 650.55 135.48 700C110.31 738.05 29.56 738.18 0 700C-38.18 650.68 0 612.5 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C262.5 0 262.5 0 350 0C437.5 0 437.5 0 525 0C612.5 0 656.25 -43.75 700 0C743.75 43.75 700 87.5 700 175C700 262.5 700 262.5 700 350C700 407.5 734.35 448.78 700 465C646.85 490.1 600.24 414.75 525 432.64C474.07 444.75 447.67 487.22 447.67 525C447.67 551.87 483.89 551.25 525 561.94C610.06 584.06 645.88 547.93 700 590.63C733.38 616.96 733.65 678.97 700 700C646.15 733.65 612.5 700 525 700C437.5 700 437.5 700 350 700C271.25 700 213.36 739.99 192.5 700C167.71 652.49 264.5 598.01 258.7 525C255.75 487.86 215.07 479.71 175 479.71" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"></path>
        <path d="M287.78 0C304.38 54.34 226.45 88.15 228.47 175C230.52 263.15 311.03 278.38 295.91 350C284.3 405 233.75 386.69 175 428.24C110.02 474.19 90.44 462.02 48.46 525C2.94 593.29 12.36 690.79 0 690.79C-11.87 690.79 0 607.89 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C231.39 0 277.65 -33.16 287.78 0" stroke="rgba(239, 68, 68, 0.3)" stroke-width="2"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1108">
          <rect width="700" height="700" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>

    <!-- Animated Pets Around the Dashboard -->
    <div class="animated-pets">
      <!-- Top Left Cat -->
      <div class="pet-container pet-top-left pet-visible">
        <img src="/CAT.png" alt="Sleeping Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Top Right Dog -->
      <div class="pet-container pet-top-right pet-visible">
        <img src="/DOG.png" alt="Sleeping Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Bottom Left Dog -->
      <div class="pet-container pet-bottom-left pet-visible">
        <img src="/DOG.png" alt="Sleeping Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Bottom Right Cat -->
      <div class="pet-container pet-bottom-right pet-visible">
        <img src="/CAT.png" alt="Sleeping Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
    </div>

    <!-- Dashboard Content -->
    <!-- Stats Cards Row -->
    <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
      <!-- Total Pets Card -->
      <div class="col-xl-4 col-md-6">
        <div class="stats-card pets-card">
          <div class="stats-icon">
            <!-- Dog Icon SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>
              <path d="M8 14v.5"/>
              <path d="M16 14v.5"/>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/>
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
            </svg>
          </div>
          <div class="stats-content">
            <div class="stats-title">Total Register Pets</div>
            <div class="stats-number">{{ loadingStats ? '...' : totalPets }}</div>
            <div class="stats-subtitle"></div>
          </div>
        </div>
      </div>

      <!-- Completed Pets Card -->
      <div class="col-xl-4 col-md-6">
        <div class="stats-card payments-card">
          <div class="stats-icon">
            <!-- Check Circle Icon SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div class="stats-content">
            <div class="stats-title">Register Pets</div>
            <div class="stats-number">{{ loadingStats ? '...' : completedPets }}</div>
            <div class="stats-subtitle"></div>
          </div>
        </div>
      </div>

      <!-- Pending Pets Card -->
      <div class="col-xl-4 col-md-6">
        <div class="stats-card rejected-card">
          <div class="stats-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="stats-content">
            <div class="stats-title">Pending Register Pets</div>
            <div class="stats-number">{{ loadingStats ? '...' : pendingPets }}</div>
            <div class="stats-subtitle"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
      <div class="col-xl-12">
        <div class="card card-flush h-xl-100">
          <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-gray-800">
                Welcome to Dashboard 
              </span>
              <span class="text-gray-500 mt-1 fw-semibold fs-6">
                Manage your application
              </span>
            </h3>
          </div>

          <div class="card-body">
            <p class="text-gray-600 fw-semibold fs-6 mb-4">
              <!-- This is your main dashboard. From here you can access all the features and manage your data effectively. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import apiService from '@/services/apiService' // Adjust the import path based on your project structure

const isLoading = ref(false)
const progress = ref(0)
const loadingStats = ref(false)
let interval: number

// Stats data
const totalPets = ref(0)
const completedPets = ref(0)
const pendingPets = ref(0)

onMounted(() => {
  const isFirstVisit = !sessionStorage.getItem('dashboard_loaded')

  if (isFirstVisit) {
    isLoading.value = true

    interval = window.setInterval(() => {
      if (progress.value < 100) {
        progress.value += 1
      } else {
        clearInterval(interval)
        isLoading.value = false
        sessionStorage.setItem('dashboard_loaded', 'true')
      }
    }, 25)
  }

  // Fetch real data from API
  fetchDashboardStats()
})

onUnmounted(() => {
  clearInterval(interval)
})

// Function to fetch dashboard statistics
async function fetchDashboardStats() {
  loadingStats.value = true
  try {
    const response = await apiService.getTotalPets()
    
    if (response.success && response.data) {
      totalPets.value = response.data.total_pets || 0
      completedPets.value = response.data.completed_pets || 0
      pendingPets.value = response.data.pending_pets || 0
    } else {
      console.error('Failed to fetch pet statistics:', response.message)
      // Set default values on error
      totalPets.value = 0
      completedPets.value = 0
      pendingPets.value = 0
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    // Set default values on error
    totalPets.value = 0
    completedPets.value = 0
    pendingPets.value = 0
  } finally {
    loadingStats.value = false
  }
}
</script>

<style scoped>
/* ===== OVERLAY ===== */
.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ===== CENTER BOX ===== */
.loader-box {
  padding: 40px 60px;
}

/* ===== BIG SPINNER ===== */
.spinner-big {
  width: 70px;
  height: 70px;
  border: 6px solid #e4e6ef;
  border-top: 6px solid #3699ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* ===== TEXT ===== */
.loading-text {
  font-size: 20px;
  font-weight: 700;
  color: #3f4254;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== DASHBOARD WRAPPER ===== */
.dashboard-wrapper {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

/* ===== BACKGROUND SVG ===== */
.dashboard-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
}

/* ===== ANIMATED PETS ===== */
.animated-pets {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.pet-container {
  position: absolute;
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.pet-container.pet-visible {
  opacity: 1;
  transform: scale(0.7);
}

.pet-top-left {
  top: 5%;
  left: 3%;
  animation: float-gentle 4s ease-in-out infinite;
}

.pet-top-right {
  top: 8%;
  right: 4%;
  animation: float-gentle 3.5s ease-in-out infinite 0.5s;
}

.pet-bottom-left {
  bottom: 10%;
  left: 5%;
  animation: float-gentle 4.2s ease-in-out infinite 1s;
}

.pet-bottom-right {
  bottom: 5%;
  right: 3%;
  animation: float-gentle 3.8s ease-in-out infinite 1.5s;
}

.pet-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

/* Sleep Z's Animation */
.sleep-z {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #3b82f6;
  opacity: 0;
  font-family: Arial, sans-serif;
}

.sleep-z {
  top: -20px;
  left: 50%;
  animation: float-z 3s ease-out infinite;
}

.sleep-z.z-2 {
  animation: float-z 3s ease-out 1s infinite;
  font-size: 15px;
}

.sleep-z.z-3 {
  animation: float-z 3s ease-out 2s infinite;
  font-size: 13px;
}

/* Floating Animation */
@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(2deg);
  }
}

/* Z Float Animation */
@keyframes float-z {
  0% {
    opacity: 0;
    transform: translateY(0) translateX(-50%) scale(0.5);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) translateX(-30px) scale(1);
  }
}

/* Ensure content is above background */
.row {
  position: relative;
  z-index: 1;
}

/* ===== STATS CARDS ===== */
.stats-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 24px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--card-color-start), var(--card-color-end));
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Pets Card - Blue Theme */
.pets-card {
  --card-color-start: #3b82f6;
  --card-color-end: #2563eb;
}

.pets-card .stats-icon {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

/* Payments Card - Green Theme */
.payments-card {
  --card-color-start: #10b981;
  --card-color-end: #059669;
}

.payments-card .stats-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

/* Rejected Card - Orange/Yellow Theme */
.rejected-card {
  --card-color-start: #f59e0b;
  --card-color-end: #d97706;
}

.rejected-card .stats-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.stats-icon {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.stats-icon svg {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.stats-content {
  flex: 1;
}

.stats-title {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.stats-number {
  font-size: 36px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1;
  margin-bottom: 6px;
}

.stats-subtitle {
  font-size: 13px;
  color: #94a3b8;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .stats-card {
    padding: 24px;
  }
  
  .stats-icon {
    width: 70px;
    height: 70px;
  }
  
  .stats-icon svg {
    width: 42px;
    height: 42px;
  }
  
  .stats-number {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .stats-card {
    padding: 20px;
    gap: 16px;
  }
  
  .stats-icon {
    width: 60px;
    height: 60px;
  }
  
  .stats-icon svg {
    width: 36px;
    height: 36px;
  }
  
  .stats-number {
    font-size: 28px;
  }
  
  .stats-title {
    font-size: 12px;
  }
  
  .stats-subtitle {
    font-size: 11px;
  }
}

@media (max-width: 576px) {
  .stats-card {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }
  
  .stats-icon {
    width: 70px;
    height: 70px;
  }
}

/* ===== RESPONSIVE PETS ===== */
@media (max-width: 1366px) {
  .pet-container {
    transform: scale(0.45);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.6);
  }
  
  .pet-image {
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 1024px) {
  .pet-container {
    transform: scale(0.4);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.55);
  }
  
  .pet-image {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 768px) {
  .pet-top-left,
  .pet-bottom-right {
    display: none;
  }
  
  .pet-container {
    transform: scale(0.35);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.5);
  }
  
  .pet-image {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 576px) {
  .pet-top-right,
  .pet-bottom-left {
    display: none;
  }
  
  .dashboard-bg {
    opacity: 0.08;
  }
}
</style>