import API_BASE_URL from './api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }
  getToken() {
    return sessionStorage.getItem('accessToken');
  }
  getAuthHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }
  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'GET',
        headers: this.getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  }
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  }
  async put(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  }
  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  }
  async sendOTP(contactNumber) {
    try {
      const response = await this.post('/petapi/send-otp', {
        contact_number: contactNumber,
      });
      return response;
    } catch (error) {
      console.error('Send OTP failed:', error);
      throw error;
    }
  }
  async login(contactNumber, otp) {
    try {
      const response = await this.post('/petapi/login', {
        contact_number: contactNumber,
        otp: otp,
      });
      if (response.success && response.data.access_token) {
        sessionStorage.setItem('accessToken', response.data.access_token);
        sessionStorage.setItem('tokenType', response.data.token_type);
        if (response.data.user) {
          sessionStorage.setItem('userData', JSON.stringify(response.data.user));
        }
      }
      
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
  async logout() {
    try {
      await this.post('/petapi/logout', {}); 
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('tokenType');
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('userMobile');
      return { success: true, message: 'Logged out successfully' };
    } catch (error) {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('tokenType');
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('userMobile');
      console.error('Logout error:', error);
      throw error;
    }
  }

  getCurrentUser() {
    const userData = sessionStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  getProducts() {
    return this.get('/products');
  }

  async registerPet(petName) {
    try {
      const response = await this.post('/petapi/register-pet', {
        petName: petName,
      });
      return response;
    } catch (error) {
      console.error('Pet registration failed:', error);
      throw error;
    }
  }

  async viewPetRegistration() {
    try {
      const response = await this.get('/petapi/view-registration');
      return response;
    } catch (error) {
      console.error('Failed to fetch pet registration:', error);
      throw error;
    }
  }
  async getOwnerProfile() {
    try {
      const response = await this.get('/petapi/owner-profile');
      return response;
    } catch (error) {
      console.error('Failed to fetch owner profile:', error);
      throw error;
    }
  }
  async updateOwnerProfile(profileData) {
    try {
      const response = await this.put('/petapi/owner-profile', profileData);
      return response;
    } catch (error) {
      console.error('Failed to update owner profile:', error);
      throw error;
    }
  }
  async getPetDetailsRecord() {
    try {
      const response = await this.get('/petapi/pet-details-record');
      return response;
    } catch (error) {
      console.error('Failed to fetch pet details records:', error);
      throw error;
    }
  }
  async getPetRegisterRedirect() {
    try {
      const response = await this.get('/petapi/pet-register-redirect');
      return response;
    } catch (error) {
      console.error('Failed to fetch pet registration redirect URL:', error);
      throw error;
    }
  }
  async registerPetOwner(ownerData) {
    try {
      const response = await this.post('/petapi/register-pet-owner', ownerData);
      return response;
    } catch (error) {
      console.error('Failed to register pet owner:', error);
      throw error;
    }
  }
  async getTotalPets() {
    try {
      const response = await this.get('/petapi/total-pets');
      return response;
    } catch (error) {
      console.error('Failed to fetch total pets:', error);
      throw error;
    }
  }
}


export default new ApiService();