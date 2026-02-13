<template>
  <div class="pet-registration-wrapper">
    <!-- Animated Background SVG -->
    <svg
      class="bg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
      preserveAspectRatio="xMinYMin slice"
    >
      <g fill="none">
        <path
          d="M350 46.32C309.83 46.32 289.24 110.49 289.24 175C289.24 241.12 309.65 307.58 350 307.58"
          stroke="rgba(242,106,44,1)"
          stroke-width="2"
        />
      </g>
    </svg>

    <!-- Animated Pets -->
    <div class="animated-pets">
      <div class="pet-container pet-top-left pet-visible">
        <img src="/CAT.png" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
      </div>

      <div class="pet-container pet-top-right pet-visible">
        <img src="/DOG.png" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
      </div>

      <div class="pet-container pet-bottom-left pet-visible">
        <img src="/DOG.png" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
      </div>

      <div class="pet-container pet-bottom-right pet-visible">
        <img src="/CAT.png" class="pet-image" />
        <div class="sleep-z">z</div>
        <div class="sleep-z z-2">z</div>
      </div>
    </div>

    <!-- Forgot Card -->
    <div class="registration-card">
      <!-- Logo -->
      <div class="logo-section">
        <img
          src="/Tambaram_Corporation_new_logo.jpg"
          class="corporation-logo"
        />
        <h2 class="corporation-name">
          Tambaram City Municipal Corporation
        </h2>
      </div>

      <h3 class="registration-title">Forgot PIN</h3>

      <form @submit.prevent="handleSubmit">
        <!-- Mobile -->
        <div class="form-group">
          <input
            v-model="form.mobile"
            type="tel"
            class="form-control"
            placeholder="Mobile Number"
            maxlength="10"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <input
            v-model="form.email"
            type="email"
            class="form-control"
            placeholder="Email Address"
            required
          />
        </div>

        <!-- Submit -->
        <div class="submit-section">
          <button type="submit" class="submit-btn" :disabled="loading">
            <span v-if="loading" class="spinner"></span>
            <span v-else>→</span>
          </button>
        </div>

        <!-- Messages -->
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-if="success" class="success-message">{{ success }}</div>

        <!-- Back -->
        <div class="form-links">
          <a href="#" class="link-text" @click.prevent="goBack">
            ← Back to Login
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPinAnimated",
  data() {
    return {
      form: {
        mobile: "",
        email: ""
      },
      loading: false,
      error: "",
      success: ""
    };
  },
  methods: {
    async handleSubmit() {
      this.error = "";
      this.success = "";
      this.loading = true;

      try {
        if (this.form.mobile.length !== 10) {
          throw new Error("Enter valid 10-digit mobile number");
        }

        console.log("Forgot PIN:", this.form);
        await new Promise(r => setTimeout(r, 1000));

        this.success =
          "PIN reset details sent to your registered email.";
      } catch (e) {
        this.error = e.message || "Failed. Try again.";
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes zzz {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-40px); }
}

.pet-registration-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.animated-pets {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.pet-container {
  position: absolute;
  animation: float 4s infinite ease-in-out;
}

.pet-top-left { top: 10%; left: 6%; }
.pet-top-right { top: 10%; right: 6%; }
.pet-bottom-left { bottom: 10%; left: 6%; }
.pet-bottom-right { bottom: 10%; right: 6%; }

.pet-image {
  width: 110px;
}

.sleep-z {
  position: absolute;
  top: -20px;
  left: 50%;
  color: #f26a2c;
  font-weight: bold;
  animation: zzz 3s infinite;
}

.z-2 { animation-delay: 1s; }

.registration-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 360px;
  box-shadow: 0 15px 50px rgba(0,0,0,.15);
  z-index: 1;
}

.logo-section {
  text-align: center;
}

.corporation-logo {
  width: 80px;
}

.corporation-name {
  font-size: 14px;
}

.registration-title {
  text-align: center;
  margin: 14px 0;
  color: #3498db;
}

.form-control {
  width: 100%;
  padding: 11px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.submit-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg,#667eea,#764ba2);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255,255,255,.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  color: #e74c3c;
  text-align: center;
  font-size: 13px;
}

.success-message {
  color: #2ecc71;
  text-align: center;
  font-size: 13px;
}

.form-links {
  text-align: center;
  margin-top: 10px;
}

.link-text {
  color: #3498db;
  text-decoration: none;
  font-size: 13px;
}
</style>