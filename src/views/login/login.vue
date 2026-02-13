<template>
  <div class="pet-registration-wrapper">
    <!-- Animated Background SVG -->
    <svg class="bg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" preserveAspectRatio="xMinYMin slice" viewBox="0 0 700 700">
      <g mask="url(&quot;#SvgjsMask1108&quot;)" fill="none">
        <path d="M350 46.32C309.83 46.32 289.24 110.49 289.24 175C289.24 241.12 309.65 307.58 350 307.58C399.15 307.58 468.24 240.85 468.24 175C468.24 110.22 399.33 46.32 350 46.32" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
        <path d="M175 479.71C143.61 479.71 121.65 492.24 115.77 525C101.89 602.38 168.2 650.55 135.48 700C110.31 738.05 29.56 738.18 0 700C-38.18 650.68 0 612.5 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C262.5 0 262.5 0 350 0C437.5 0 437.5 0 525 0C612.5 0 656.25 -43.75 700 0C743.75 43.75 700 87.5 700 175C700 262.5 700 262.5 700 350C700 407.5 734.35 448.78 700 465C646.85 490.1 600.24 414.75 525 432.64C474.07 444.75 447.67 487.22 447.67 525C447.67 551.87 483.89 551.25 525 561.94C610.06 584.06 645.88 547.93 700 590.63C733.38 616.96 733.65 678.97 700 700C646.15 733.65 612.5 700 525 700C437.5 700 437.5 700 350 700C271.25 700 213.36 739.99 192.5 700C167.71 652.49 264.5 598.01 258.7 525C255.75 487.86 215.07 479.71 175 479.71" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
        <path d="M287.78 0C304.38 54.34 226.45 88.15 228.47 175C230.52 263.15 311.03 278.38 295.91 350C284.3 405 233.75 386.69 175 428.24C110.02 474.19 90.44 462.02 48.46 525C2.94 593.29 12.36 690.79 0 690.79C-11.87 690.79 0 607.89 0 525C0 437.5 0 437.5 0 350C0 262.5 0 262.5 0 175C0 87.5 -43.75 43.75 0 0C43.75 -43.75 87.5 0 175 0C231.39 0 277.65 -33.16 287.78 0" stroke="rgba(242, 106, 44, 1)" stroke-width="2"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1108">
          <rect width="700" height="700" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>

    <!-- Animated Pet Images Around the Form -->
    <div class="animated-pets">
      <!-- Top Left Cat -->
      <div class="pet-container pet-top-left" :class="{ 'pet-visible': currentAnimal === 'cat' }">
        <img src="/CAT.png" alt="Sleeping Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Top Right Dog -->
      <div class="pet-container pet-top-right" :class="{ 'pet-visible': currentAnimal === 'dog' }">
        <img src="/DOG.png" alt="Sleeping Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Bottom Left Dog -->
      <div class="pet-container pet-bottom-left" :class="{ 'pet-visible': currentAnimal === 'dog' }">
        <img src="/DOG.png" alt="Sleeping Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Bottom Right Cat -->
      <div class="pet-container pet-bottom-right" :class="{ 'pet-visible': currentAnimal === 'cat' }">
        <img src="/CAT.png" alt="Sleeping Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Center Left Cat (Always visible) -->
      <div class="pet-container pet-center-left pet-visible">
        <img src="/CAT.png" alt="Sleeping Cat" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>

      <!-- Center Right Dog (Always visible) -->
      <div class="pet-container pet-center-right pet-visible">
        <img src="/DOG.png" alt="Sleeping Dog" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
        <div class="sleep-z z-3">z</div>
      </div>
    </div>

    <!-- Registration Form -->
    <div class="registration-card">
      <!-- Logo -->
      <div class="logo-section">
        <img 
          src="/Tambaram_Corporation_new_logo.jpg" 
          alt="Tambaram Corporation Logo" 
          class="corporation-logo"
        />
        <h2 class="corporation-name">Tambaram City Municipal Corporation</h2>
      </div>

      <!-- Title -->
      <h3 class="registration-title">Pet Animal Registration</h3>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Mobile Number -->
        <div class="form-group">
          <input
            v-model="form.mobile"
            type="tel"
            class="form-control"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            maxlength="10"
            required
          />
        </div>

        <!-- Password (OTP) -->
        <div class="form-group password-group">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            placeholder="Password (OTP)"
            required
          />
        </div>

        <!-- Links -->
        <div class="form-links">
          <a href="#" class="link-text" @click.prevent="forgotPassword">Forgot PIN?</a>
          <a href="#" class="link-text" @click.prevent="newUser">New User</a>
        </div>
        
        <!-- Submit Button -->
        <div class="submit-section">
          <button type="submit" class="submit-btn" :disabled="loading">
            <span v-if="loading" class="spinner"></span>
            <span v-else class="arrow-icon">→</span>
          </button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <!-- Success Message -->
        <div v-if="success" class="success-message">
          {{ success }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'PetRegistrationAnimated',
  data() {
    return {
      form: {
        mobile: '',
        password: ''
      },
      showPassword: false,
      loading: false,
      error: '',
      success: '',
      currentAnimal: 'cat'
    };
  },
  mounted() {
    // Randomly show cat or dog on mount
    this.currentAnimal = Math.random() < 0.5 ? 'cat' : 'dog';
  },
  methods: {
    async handleSubmit() {
      this.error = '';
      this.success = '';
      this.loading = true;

      try {
        // Validate mobile number
        if (this.form.mobile.length !== 10) {
          throw new Error('Please enter a valid 10-digit mobile number');
        }

        // Call login API
        const response = await apiService.login(this.form.mobile, this.form.password);
        
        console.log('Login response:', response);
        
        // Check if login was successful
        if (response.success) {
          // Set session flags
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('userMobile', this.form.mobile);
          
          // Access token is already stored by apiService.login()
          
          // Handle successful login
          this.success = response.message || 'Login successful!';
          
          // Navigate to dashboard after a short delay
          setTimeout(() => {
            // Check if there's a redirect query parameter
            const redirect = this.$route.query.redirect || '/dashboard';
            this.$router.push(redirect);
          }, 1000);
        } else {
          throw new Error(response.message || 'Login failed');
        }
        
      } catch (err) {
        this.error = err.message || 'Login failed. Please try again.';
        console.error('Login error:', err);
      } finally {
        this.loading = false;
      }
    },
    forgotPassword() {
      this.$router.push('/forgot');
    },
    newUser() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.pet-registration-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 15px;
  position: relative;
  overflow: hidden;
}

/* Background SVG Styles */
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 0;
}

/* Animated Pets Container */
.animated-pets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Pet Container Positions */
.pet-container {
  position: absolute;
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.pet-container.pet-visible {
  opacity: 1;
  transform: scale(0.85);
}

.pet-top-left {
  top: 8%;
  left: 6%;
  animation: float-gentle 4s ease-in-out infinite;
}

.pet-top-right {
  top: 12%;
  right: 8%;
  animation: float-gentle 3.5s ease-in-out infinite 0.5s;
}

.pet-bottom-left {
  bottom: 12%;
  left: 8%;
  animation: float-gentle 4.2s ease-in-out infinite 1s;
}

.pet-bottom-right {
  bottom: 8%;
  right: 6%;
  animation: float-gentle 3.8s ease-in-out infinite 1.5s;
}

.pet-center-left {
  top: 45%;
  left: 3%;
  animation: float-gentle 4.5s ease-in-out infinite 0.3s;
}

.pet-center-right {
  top: 50%;
  right: 3%;
  animation: float-gentle 4s ease-in-out infinite 0.8s;
}

/* Pet Image Styles */
.pet-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

/* Sleep Z's */
.sleep-z {
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #F26A2C;
  opacity: 0;
  font-family: Arial, sans-serif;
}

.sleep-z {
  top: -25px;
  left: 50%;
  animation: float-z 3s ease-out infinite;
}

.sleep-z.z-2 {
  animation: float-z 3s ease-out 1s infinite;
  font-size: 16px;
}

.sleep-z.z-3 {
  animation: float-z 3s ease-out 2s infinite;
  font-size: 14px;
}

/* Animations */
@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}

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
    transform: translateY(-50px) translateX(-30px) scale(1);
  }
}

/* Registration Card */
.registration-card {
  background: white;
  border-radius: 16px;
  padding: 24px 20px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.logo-section {
  text-align: center;
  margin-bottom: 12px;
}

.corporation-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 8px;
}

.corporation-name {
  font-size: 14px;
  color: #2c3e50;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.registration-title {
  text-align: center;
  color: #3498db;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0 20px 0;
}

.form-group {
  margin-bottom: 14px;
}

.password-group {
  position: relative;
}

.form-control {
  width: 100%;
  padding: 11px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-control::placeholder {
  color: #999;
}

.form-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.link-text {
  color: #3498db;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
}

.link-text:hover {
  color: #2980b9;
  text-decoration: underline;
}

.submit-section {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.submit-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.arrow-icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  color: #e74c3c;
  font-size: 13px;
  text-align: center;
  margin-top: 12px;
  padding: 8px;
  background: #fee;
  border-radius: 6px;
}

.success-message {
  color: #27ae60;
  font-size: 13px;
  text-align: center;
  margin-top: 12px;
  padding: 8px;
  background: #d4edda;
  border-radius: 6px;
}

/* Responsive Design */
@media (max-width: 1366px) {
  .pet-container {
    transform: scale(0.6);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.75);
  }
  
  .pet-image {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1024px) {
  .pet-top-left,
  .pet-bottom-left {
    left: 2%;
  }
  
  .pet-top-right,
  .pet-bottom-right {
    right: 2%;
  }
  
  .pet-center-left {
    left: 1%;
  }
  
  .pet-center-right {
    right: 1%;
  }
  
  .pet-container {
    transform: scale(0.55);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.7);
  }
  
  .pet-image {
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 768px) {
  .pet-container {
    transform: scale(0.5);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.65);
  }
  
  .pet-top-left,
  .pet-bottom-right {
    display: none;
  }
  
  .pet-image {
    width: 80px;
    height: 80px;
  }
  
  .registration-card {
    max-width: 340px;
    padding: 20px 18px;
  }
}

@media (max-width: 480px) {
  .registration-card {
    padding: 18px 16px;
    max-width: 320px;
  }

  .corporation-logo {
    width: 70px;
    height: 70px;
  }

  .corporation-name {
    font-size: 13px;
  }

  .registration-title {
    font-size: 15px;
  }

  .pet-container {
    transform: scale(0.45);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.6);
  }
  
  .pet-top-right,
  .pet-bottom-left {
    display: none;
  }
  
  .pet-image {
    width: 70px;
    height: 70px;
  }
  
  .form-control {
    padding: 10px 12px;
    font-size: 13px;
  }
}

/* Ensure proper display at 100% zoom */
@media screen and (min-width: 1440px) {
  .registration-card {
    max-width: 380px;
  }
  
  .pet-container {
    transform: scale(0.7);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.85);
  }
  
  .pet-image {
    width: 120px;
    height: 120px;
  }
}

@media screen and (min-width: 1920px) {
  .registration-card {
    max-width: 400px;
  }
  
  .pet-container {
    transform: scale(0.8);
  }
  
  .pet-container.pet-visible {
    transform: scale(0.95);
  }
  
  .pet-image {
    width: 130px;
    height: 130px;
  }
}
</style>