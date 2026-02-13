<template>
  <div class="dashboard-container">
    <!-- Header -->
    <header class="dashboard-header">
      <div class="header-content">
        <div class="logo-section">
          <img 
            src="/Tambaram_Corporation_new_logo.jpg" 
            alt="Tambaram Corporation Logo" 
            class="header-logo"
          />
          <h1 class="app-title">Pet Registration Dashboard</h1>
        </div>
        
        <div class="user-section">
          <div class="user-info">
            <span class="user-name">{{ userName }}</span>
            <span class="user-mobile">{{ userMobile }}</span>
          </div>
          <button @click="handleLogout" class="logout-btn">
            <span class="logout-icon">🚪</span>
            Logout
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="dashboard-main">
      <div class="welcome-section">
        <h2>Welcome to Pet Registration System</h2>
        <p>Manage your pet registrations and profile</p>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <div class="action-card" @click="goToRegister">
          <div class="card-icon">🐕</div>
          <h3>Register New Pet</h3>
          <p>Add a new pet to your account</p>
        </div>

        <div class="action-card" @click="goToPetDetails">
          <div class="card-icon">📋</div>
          <h3>View Pet Details</h3>
          <p>See all your registered pets</p>
        </div>

        <div class="action-card" @click="goToProfile">
          <div class="card-icon">👤</div>
          <h3>Owner Profile</h3>
          <p>Update your profile information</p>
        </div>
      </div>

      <!-- User Details Card -->
      <div class="user-details-card">
        <h3>Your Information</h3>
        <div class="detail-row">
          <span class="label">User ID:</span>
          <span class="value">{{ userDetails.uid || 'N/A' }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Name:</span>
          <span class="value">{{ userDetails.name || 'N/A' }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Email:</span>
          <span class="value">{{ userDetails.email || 'N/A' }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Contact:</span>
          <span class="value">{{ userDetails.contact_number || 'N/A' }}</span>
        </div>
      </div>
    </main>

    <!-- Logout Confirmation Modal -->
    <div v-if="showLogoutModal" class="modal-overlay" @click="showLogoutModal = false">
      <div class="modal-content" @click.stop>
        <h3>Confirm Logout</h3>
        <p>Are you sure you want to logout?</p>
        <div class="modal-actions">
          <button @click="showLogoutModal = false" class="btn-cancel">Cancel</button>
          <button @click="confirmLogout" class="btn-confirm">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logout, getCurrentUserMobile, getCurrentUser } from '@/utils/auth';

export default {
  name: 'Dashboard',
  data() {
    return {
      userMobile: '',
      userName: '',
      userDetails: {},
      showLogoutModal: false,
      loggingOut: false
    };
  },
  mounted() {
    this.loadUserData();
  },
  methods: {
    loadUserData() {
      // Get mobile from session
      this.userMobile = getCurrentUserMobile() || 'N/A';
      
      // Get full user details from session
      const user = getCurrentUser();
      if (user) {
        this.userDetails = user;
        this.userName = user.name || 'User';
      } else {
        this.userName = 'User';
        this.userDetails = {};
      }
    },
    
    handleLogout() {
      this.showLogoutModal = true;
    },
    
    async confirmLogout() {
      if (this.loggingOut) return;
      
      this.loggingOut = true;
      
      try {
        await logout(this.$router);
      } catch (error) {
        console.error('Logout error:', error);
        // Even if there's an error, redirect to login
        this.$router.push('/login');
      } finally {
        this.loggingOut = false;
        this.showLogoutModal = false;
      }
    },
    
    goToRegister() {
      this.$router.push('/pet-register');
    },
    
    goToPetDetails() {
      this.$router.push('/pet-details');
    },
    
    goToProfile() {
      this.$router.push('/pet-owner-profile');
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background: #f5f7fa;
}

/* Header Styles */
.dashboard-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.app-title {
  font-size: 20px;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.user-mobile {
  font-size: 12px;
  color: #7f8c8d;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
}

.logout-icon {
  font-size: 16px;
}

/* Main Content */
.dashboard-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}

.welcome-section h2 {
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 8px;
}

.welcome-section p {
  color: #7f8c8d;
  font-size: 16px;
}

/* Quick Actions */
.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.action-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.action-card h3 {
  color: #2c3e50;
  font-size: 18px;
  margin-bottom: 8px;
}

.action-card p {
  color: #7f8c8d;
  font-size: 14px;
}

/* User Details Card */
.user-details-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-details-card h3 {
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ecf0f1;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #ecf0f1;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row .label {
  font-weight: 600;
  color: #7f8c8d;
}

.detail-row .value {
  color: #2c3e50;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal-content h3 {
  color: #2c3e50;
  font-size: 22px;
  margin-bottom: 16px;
}

.modal-content p {
  color: #7f8c8d;
  font-size: 16px;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.modal-actions button {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cancel {
  background: #ecf0f1;
  color: #2c3e50;
}

.btn-cancel:hover {
  background: #bdc3c7;
}

.btn-confirm {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.btn-confirm:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
  }

  .user-section {
    width: 100%;
    justify-content: space-between;
  }

  .app-title {
    font-size: 16px;
  }

  .quick-actions {
    grid-template-columns: 1fr;
  }
}
</style>