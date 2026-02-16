<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-fluid">
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-10">
        <img 
          src="/public/Tambaram_Corporation_new_logo.jpg" 
          alt="Loading..." 
          class="rotating-spinner"
        >
      </div>

      <div v-else>
        <!-- Statistics Cards Row -->
        <div class="row g-5 g-xl-8 mb-5">
          <!-- Total Pets Card -->
          <div class="col-xl-4">
            <div class="card card-xl-stretch mb-xl-8 border-hover-primary">
              <div class="card-body d-flex align-items-center">
                <div class="symbol symbol-50px me-5">
                  <span class="symbol-label bg-light-primary position-relative p-2">
                    <div class="pet-icons-container-dual">
                      <img src="/public/cat-sting.png" alt="Cat" class="pet-icon-small pet-icon-left">
                      <img src="/public/dog-sting.png" alt="Dog" class="pet-icon-small pet-icon-right">
                    </div>
                  </span>
                </div>
                <div class="d-flex flex-column flex-grow-1">
                  <span class="text-gray-400 fw-semibold fs-7">Total Pets</span>
                  <span class="text-gray-800 fw-bold fs-2x">{{ totalPets }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Total Cats Card -->
          <div class="col-xl-4">
            <div class="card card-xl-stretch mb-xl-8 border-hover-success">
              <div class="card-body d-flex align-items-center">
                <div class="symbol symbol-50px me-5">
                  <span class="symbol-label bg-light-success p-2">
                    <img src="/public/cat-sting.png" alt="Cat" class="pet-icon-single">
                  </span>
                </div>
                <div class="d-flex flex-column flex-grow-1">
                  <span class="text-gray-400 fw-semibold fs-7">Total Cats</span>
                  <span class="text-gray-800 fw-bold fs-2x">{{ totalCats }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Total Dogs Card -->
          <div class="col-xl-4">
            <div class="card card-xl-stretch mb-xl-8 border-hover-warning">
              <div class="card-body d-flex align-items-center">
                <div class="symbol symbol-50px me-5">
                  <span class="symbol-label bg-light-warning p-2">
                    <img src="/public/dog-sting.png" alt="Dog" class="pet-icon-single">
                  </span>
                </div>
                <div class="d-flex flex-column flex-grow-1">
                  <span class="text-gray-400 fw-semibold fs-7">Total Dogs</span>
                  <span class="text-gray-800 fw-bold fs-2x">{{ totalDogs }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Full Width Table -->
        <div class="card card-flush">
          <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-gray-800">Pet Details List</span>
            </h3>
            <div class="card-toolbar">
              <!-- <button class="btn btn-sm btn-primary me-2" @click="openSlider()">
                <i class="ki-duotone ki-plus fs-2"></i>
                <span class="d-none d-sm-inline">Add Pet</span>
              </button> -->
              <button class="btn btn-sm btn-light-primary" @click="fetchData">
                <i class="ki-duotone ki-arrows-circle fs-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
                <span class="d-none d-sm-inline">Refresh</span>
              </button>
            </div>
          </div>

          <div class="card-body pt-5">
            <!-- Desktop Table -->
            <div class="table-responsive d-none d-lg-block">
              <table class="table table-row-bordered table-row-gray-300 align-middle gs-0 gy-3">
                <thead>
                  <tr class="fw-bold text-muted">
                    <th class="min-w-50px">SR</th>
                    <th class="min-w-120px">Reference No</th>
                    <th class="min-w-150px">Owner Name</th>
                    <th class="min-w-120px">Mobile</th>
                    <th class="min-w-150px">Pet Name</th>
                    <th class="min-w-100px">Species</th>
                    <th class="min-w-100px">Breed</th>
                    <th class="min-w-100px">Sex</th>
                    <th class="min-w-120px">Current Status</th>
                    <th class="min-w-130px">Registration Date</th>
                    <th class="min-w-100px text-center">Certificate</th>
                    <th class="min-w-150px text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td class="text-gray-800 fw-semibold">{{ item.referenceNo }}</td>
                    <td class="text-gray-800">{{ item.ownerName }}</td>
                    <td class="text-gray-600">{{ item.mobileNumber }}</td>
                    <td class="text-gray-800 fw-bold">{{ item.petName }}</td>
                    <td class="text-gray-600">{{ item.species }}</td>
                    <td class="text-gray-600">{{ item.breed }}</td>
                    <td class="text-gray-600">{{ item.sex }}</td>
                    <td>
                      <span 
                        class="badge py-3 px-4 fs-7"
                        :class="getStatusClass(item.currentStatus)"
                      >
                        {{ item.currentStatus }}
                      </span>
                    </td>
                    <td class="text-gray-600">{{ formatDate(item.registrationDate) }}</td>
                    <td class="text-center">
                      <button 
                        class="btn btn-icon btn-bg-light btn-active-color-success btn-sm"
                        @click="downloadCertificate(item)"
                        title="Download Certificate"
                        :disabled="item.currentStatus !== 'Approved'"
                      >
                        <i class="ki-duotone ki-file-down fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </button>
                    </td>
                    <td class="text-center">
                      <button 
                        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                        @click="viewItemDetails(item)"
                        title="View Details"
                      >
                        <i class="ki-duotone ki-eye fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <!-- <button 
                        class="btn btn-icon btn-bg-light btn-active-color-warning btn-sm me-1"
                        @click="editItem(item)"
                        title="Edit"
                      >
                        <i class="ki-duotone ki-pencil fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i> 
                      </button> -->
                      <!-- <button 
                        class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm"
                        @click="deleteItem(item.id)"
                        title="Delete"
                      >
                        <i class="ki-duotone ki-trash fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                          <span class="path4"></span>
                          <span class="path5"></span>
                        </i>
                      </button> -->
                    </td>
                  </tr>
                  <tr v-if="items.length === 0">
                    <td colspan="12" class="text-center text-muted py-10">
                      No pet records found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile/Tablet Cards -->
            <div class="d-lg-none">
              <div v-if="items.length === 0" class="text-center text-muted py-10">
                No pet records found
              </div>
              
              <div v-for="(item, index) in items" :key="item.id" class="card mb-5 shadow-sm">
                <div class="card-body p-4">
                  <!-- SR & Status -->
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <span class="badge badge-light-primary fs-7 px-3 py-2">
                      #{{ index + 1 }}
                    </span>
                    <span 
                      class="badge py-2 px-4 fs-7"
                      :class="getStatusClass(item.currentStatus)"
                    >
                      {{ item.currentStatus }}
                    </span>
                  </div>

                  <!-- Owner & Pet Details -->
                  <div class="mb-3">
                    <h4 class="mb-2 text-gray-900 fw-bold">{{ item.petName }}</h4>
                    <div class="text-gray-600 mb-1">
                      <strong>Owner:</strong> {{ item.ownerName }}
                    </div>
                    <div class="text-gray-600 mb-1">
                      <strong>Mobile:</strong> {{ item.mobileNumber }}
                    </div>
                    <div class="text-gray-600 mb-1">
                      <strong>Reference:</strong> {{ item.referenceNo }}
                    </div>
                    <div class="text-gray-600 mb-1">
                      <strong>Species:</strong> {{ item.species }}
                    </div>
                    <div class="text-gray-600 mb-1">
                      <strong>Breed:</strong> {{ item.breed }}
                    </div>
                  </div>

                  <!-- Registration Date -->
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <i class="ki-duotone ki-calendar fs-3 text-primary me-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      <div>
                        <span class="text-gray-500 fs-7 d-block">Registration Date</span>
                        <span class="text-gray-800 fs-6">{{ formatDate(item.registrationDate) }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Quick Actions -->
                  <div class="d-flex gap-2 mb-3">
                    <button 
                      class="btn btn-sm btn-light-success flex-fill"
                      @click="downloadCertificate(item)"
                      :disabled="item.currentStatus !== 'Approved'"
                    >
                      <i class="ki-duotone ki-file-down fs-4 me-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      Certificate
                    </button>
                  </div>

                  <!-- Main Actions -->
                  <div class="d-flex gap-2 pt-3 border-top">
                    <button 
                      class="btn btn-sm btn-light-primary flex-fill"
                      @click="viewItemDetails(item)"
                    >
                      <i class="ki-duotone ki-eye fs-4 me-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                      </i>
                      View
                    </button>
                    <button 
                      class="btn btn-sm btn-light-warning flex-fill"
                      @click="editItem(item)"
                    >
                      <i class="ki-duotone ki-pencil fs-4 me-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      Edit
                    </button>
                    <button 
                      class="btn btn-sm btn-light-danger flex-fill"
                      @click="deleteItem(item.id)"
                    >
                      <i class="ki-duotone ki-trash fs-4 me-1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                        <span class="path5"></span>
                      </i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Details View Modal -->
  <div 
    v-if="detailsModalOpen" 
    class="modal fade show d-block" 
    tabindex="-1" 
    style="background-color: rgba(0, 0, 0, 0.5);"
    @click.self="closeDetailsModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Pet Registration Details</h3>
          <button type="button" class="btn-close" @click="closeDetailsModal"></button>
        </div>
        <div class="modal-body" v-if="selectedItem">
          <div class="row g-5">
            <!-- Left Column - Images -->
            <div class="col-lg-4">
              <!-- Pet Photo -->
              <div class="card mb-5">
                <div class="card-header">
                  <h5 class="card-title mb-0">Pet Photo</h5>
                </div>
                <div class="card-body text-center">
                  <div class="image-container mb-3" v-if="selectedItem.petPhoto">
                    <img 
                      :src="getImageUrl(selectedItem.petPhoto)" 
                      alt="Pet Photo" 
                      class="img-fluid rounded shadow-sm cursor-pointer"
                      @click="openImageModal(getImageUrl(selectedItem.petPhoto))"
                      style="max-height: 300px; object-fit: cover;"
                    />
                  </div>
                  <div v-else class="text-muted py-5">
                    <i class="ki-duotone ki-picture fs-3x mb-3">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    <p>No photo available</p>
                  </div>
                </div>
              </div>

              <!-- Owner Photo -->
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title mb-0">Owner Photo</h5>
                </div>
                <div class="card-body text-center">
                  <div class="image-container mb-3" v-if="selectedItem.ownerPhoto">
                    <img 
                      :src="getImageUrl(selectedItem.ownerPhoto)" 
                      alt="Owner Photo" 
                      class="img-fluid rounded shadow-sm cursor-pointer"
                      @click="openImageModal(getImageUrl(selectedItem.ownerPhoto))"
                      style="max-height: 300px; object-fit: cover;"
                    />
                  </div>
                  <div v-else class="text-muted py-5">
                    <i class="ki-duotone ki-picture fs-3x mb-3">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    <p>No photo available</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - Details -->
            <div class="col-lg-8">
              <!-- Owner Information -->
              <div class="card mb-5">
                <div class="card-header">
                  <h5 class="card-title mb-0">Owner Information</h5>
                </div>
                <div class="card-body">
                  <div class="row g-4">
                    <div class="col-md-6" v-for="field in selectedItem.ownerFields" :key="field.key">
                      <label class="text-gray-600 fw-semibold fs-7 d-block mb-1">{{ field.label }}</label>
                      <div class="text-gray-800 fw-bold fs-6">{{ field.value || '-' }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pet Information -->
              <div class="card mb-5">
                <div class="card-header">
                  <h5 class="card-title mb-0">Pet Information</h5>
                </div>
                <div class="card-body">
                  <div class="row g-4">
                    <div class="col-md-6" v-for="field in selectedItem.petFields" :key="field.key">
                      <label class="text-gray-600 fw-semibold fs-7 d-block mb-1">{{ field.label }}</label>
                      <div class="text-gray-800 fw-bold fs-6">{{ field.value || '-' }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Vaccination & Medical -->
              <div class="card mb-5">
                <div class="card-header">
                  <h5 class="card-title mb-0">Vaccination & Medical Information</h5>
                </div>
                <div class="card-body">
                  <div class="row g-4">
                    <div class="col-md-6" v-for="field in selectedItem.medicalFields" :key="field.key">
                      <label class="text-gray-600 fw-semibold fs-7 d-block mb-1">{{ field.label }}</label>
                      <div class="text-gray-800 fw-bold fs-6">{{ field.value || '-' }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Veterinary Information -->
              <div class="card" v-if="selectedItem.vetFields && selectedItem.vetFields.length > 0">
                <div class="card-header">
                  <h5 class="card-title mb-0">Veterinary Doctor Information</h5>
                </div>
                <div class="card-body">
                  <div class="row g-4">
                    <div class="col-md-6" v-for="field in selectedItem.vetFields" :key="field.key">
                      <label class="text-gray-600 fw-semibold fs-7 d-block mb-1">{{ field.label }}</label>
                      <div class="text-gray-800 fw-bold fs-6">{{ field.value || '-' }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeDetailsModal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Image Preview Modal -->
  <div 
    v-if="imageModalOpen" 
    class="modal fade show d-block" 
    tabindex="-1" 
    style="background-color: rgba(0, 0, 0, 0.8);"
    @click="closeImageModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body p-0 text-center">
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" @click="closeImageModal"></button>
          <img :src="currentImage" alt="Preview" class="img-fluid rounded" style="max-height: 90vh;" />
        </div>
      </div>
    </div>
  </div>

  <!-- Side Slider (unchanged) -->
  <div 
    v-if="sliderOpen" 
    class="slider-overlay"
    @click="closeSlider"
  ></div>

  <div class="side-slider" :class="{ 'slider-open': sliderOpen }">
    <div class="slider-header">
      <h3 class="slider-title">{{ editMode ? 'Edit' : viewMode ? 'View' : 'Add' }} Pet Details</h3>
      <button class="btn-close-slider" @click="closeSlider">
        <i class="ki-duotone ki-cross fs-1">
          <span class="path1"></span>
          <span class="path2"></span>
        </i>
      </button>
    </div>

    <div class="slider-body">
      <form @submit.prevent="handleSubmit">
        <!-- Owner Details Section -->
        <div class="mb-6">
          <h4 class="text-gray-800 fw-bold mb-4">Owner Details</h4>
          
          <div class="mb-5">
            <label class="form-label fw-semibold required">Owner Name</label>
            <input 
              v-model="formData.ownerName" 
              type="text" 
              class="form-control form-control-solid" 
              placeholder="Enter owner name"
              :disabled="viewMode"
              required
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Mobile Number</label>
            <input 
              v-model="formData.mobileNumber" 
              type="text" 
              class="form-control form-control-solid" 
              placeholder="Enter mobile number"
              :disabled="viewMode"
              required
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold">Email ID</label>
            <input 
              v-model="formData.emailId" 
              type="email" 
              class="form-control form-control-solid" 
              placeholder="Enter email"
              :disabled="viewMode"
            />
          </div>
        </div>

        <!-- Pet Details Section -->
        <div class="mb-6">
          <h4 class="text-gray-800 fw-bold mb-4">Pet Details</h4>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Pet Name</label>
            <input 
              v-model="formData.petName" 
              type="text" 
              class="form-control form-control-solid" 
              placeholder="Enter pet name"
              :disabled="viewMode"
              required
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Species</label>
            <select 
              v-model="formData.species" 
              class="form-select form-select-solid"
              :disabled="viewMode"
              required
            >
              <option value="">Select Species</option>
              <option value="CANINE (DOG)">CANINE (DOG)</option>
              <option value="FELINE (CAT)">FELINE (CAT)</option>
            </select>
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Breed</label>
            <input 
              v-model="formData.breed" 
              type="text" 
              class="form-control form-control-solid" 
              placeholder="Enter breed"
              :disabled="viewMode"
              required
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold">Colour</label>
            <input 
              v-model="formData.colour" 
              type="text" 
              class="form-control form-control-solid" 
              placeholder="Enter colour"
              :disabled="viewMode"
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Sex</label>
            <select 
              v-model="formData.sex" 
              class="form-select form-select-solid"
              :disabled="viewMode"
              required
            >
              <option value="">Select Sex</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold">Age (Years)</label>
            <input 
              v-model="formData.ageYears" 
              type="number" 
              class="form-control form-control-solid" 
              placeholder="Enter age in years"
              :disabled="viewMode"
            />
          </div>
        </div>

        <!-- Status Section -->
        <div class="mb-6" v-if="editMode || viewMode">
          <h4 class="text-gray-800 fw-bold mb-4">Status</h4>

          <div class="mb-5">
            <label class="form-label fw-semibold required">Current Status</label>
            <select 
              v-model="formData.currentStatus" 
              class="form-select form-select-solid"
              :disabled="viewMode"
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Under Review">Under Review</option>
            </select>
          </div>

          <div v-if="formData.currentStatus === 'Rejected'" class="mb-5">
            <label class="form-label fw-semibold">Rejected Reason</label>
            <textarea 
              v-model="formData.rejectedReason" 
              class="form-control form-control-solid" 
              rows="3"
              placeholder="Enter rejection reason"
              :disabled="viewMode"
            ></textarea>
          </div>

          <div class="mb-5">
            <label class="form-label fw-semibold">Official Remark</label>
            <textarea 
              v-model="formData.officialRemark" 
              class="form-control form-control-solid" 
              rows="3"
              placeholder="Enter official remark"
              :disabled="viewMode"
            ></textarea>
          </div>
        </div>

        <div v-if="!viewMode">
          <button type="submit" class="btn btn-success w-100" :disabled="submitting">
            <span v-if="!submitting">{{ editMode ? 'Update' : 'Submit' }}</span>
            <span v-else>
              <span class="spinner-border spinner-border-sm me-2"></span>
              {{ editMode ? 'Updating...' : 'Submitting...' }}
            </span>
          </button>
          
          <button 
            type="button" 
            class="btn btn-secondary w-100 mt-2"
            @click="closeSlider"
          >
            Cancel
          </button>
        </div>
        <div v-else>
          <button 
            type="button" 
            class="btn btn-secondary w-100"
            @click="closeSlider"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Toast Container -->
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
    <div 
      v-for="toast in toasts" 
      :key="toast.id"
      class="toast show align-items-center text-white border-0"
      :class="toast.type === 'success' ? 'bg-success' : 'bg-danger'"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">
          <i class="ki-duotone fs-2 me-2" :class="toast.type === 'success' ? 'ki-check-circle' : 'ki-cross-circle'">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          {{ toast.message }}
        </div>
        <button 
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          @click="removeToast(toast.id)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import Swal from 'sweetalert2'
import ApiService from '@/services/ApiService'

interface PetItem {
  id: number
  student_id: number
  referenceNo: string
  petName: string
  petId: string
  petType: string
  currentStatus: string
  rejectedReason: string | null
  officialRemark: string | null
  registrationDate: string
  ownerName: string
  mobileNumber: string
  emailId: string
  species: string
  breed: string
  colour: string
  sex: string
  ageYears: string
  petPhoto: string
  ownerPhoto: string
  allDetails: any
  created_at: string
  updated_at: string
  ownerFields?: any[]
  petFields?: any[]
  medicalFields?: any[]
  vetFields?: any[]
}

interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
}

const formData = reactive({
  referenceNo: '',
  petName: '',
  petId: '',
  petType: '',
  currentStatus: 'Pending',
  rejectedReason: '',
  officialRemark: '',
  registrationDate: '',
  ownerName: '',
  mobileNumber: '',
  emailId: '',
  species: '',
  breed: '',
  colour: '',
  sex: '',
  ageYears: ''
})

const items = ref<PetItem[]>([])
const loading = ref(false)
const submitting = ref(false)
const editMode = ref(false)
const viewMode = ref(false)
const editingId = ref<number | null>(null)
const sliderOpen = ref(false)
const toasts = ref<Toast[]>([])
const detailsModalOpen = ref(false)
const imageModalOpen = ref(false)
const selectedItem = ref<PetItem | null>(null)
const currentImage = ref('')
let toastIdCounter = 0

const totalPets = computed(() => items.value.length)
const totalCats = computed(() => items.value.filter(pet => {
  const species = pet.species?.toLowerCase() || ''
  return species.includes('feline') || species.includes('cat')
}).length)
const totalDogs = computed(() => items.value.filter(pet => {
  const species = pet.species?.toLowerCase() || ''
  return species.includes('canine') || species.includes('dog')
}).length)

const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const id = ++toastIdCounter
  toasts.value.push({ id, message, type })
  
  setTimeout(() => {
    removeToast(id)
  }, 4000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

const getImageUrl = (path: string) => {
  if (!path || path === '-') return ''
  // Adjust this base URL to match your Laravel storage path
  return `http://localhost:9000/storage/${path}`
}

const openImageModal = (imageUrl: string) => {
  currentImage.value = imageUrl
  imageModalOpen.value = true
}

const closeImageModal = () => {
  imageModalOpen.value = false
  currentImage.value = ''
}

const viewItemDetails = (item: PetItem) => {
  selectedItem.value = item
  
  // Organize fields into categories
  if (item.allDetails) {
    const details = item.allDetails
    
    // Owner Fields
    selectedItem.value.ownerFields = [
      { key: 'title', label: 'Title', value: details.title?.value },
      { key: 'owner_name', label: 'Owner Name', value: details.owner_name?.value },
      { key: 'mobile_number', label: 'Mobile Number', value: details.mobile_number?.value },
      { key: 'email_id', label: 'Email ID', value: details.email_id?.value },
      { key: 'zone', label: 'Zone', value: details.zone?.value },
      { key: 'ward', label: 'Ward', value: details.ward?.value },
      { key: 'street_name', label: 'Street Name', value: details.street_name?.value },
      { key: 'door_no', label: 'Door No', value: details.door_no?.value },
      { key: 'locality_building_name', label: 'Locality / Building Name', value: details.locality_building_name?.value },
      { key: 'pin_code', label: 'PIN Code', value: details.pin_code?.value },
    ]
    
    // Pet Fields
    selectedItem.value.petFields = [
      { key: 'pet_name', label: 'Pet Name', value: details.pet_name?.value },
      { key: 'species', label: 'Species', value: details.species?.value },
      { key: 'breed', label: 'Breed', value: details.breed?.value },
      { key: 'colour', label: 'Colour', value: details.colour?.value },
      { key: 'sex', label: 'Sex', value: details.sex?.value },
      { key: 'age_years', label: 'Age (Years)', value: details.age_years?.value },
      { key: 'months', label: 'Months', value: details.months?.value },
      { key: 'identification_mark', label: 'Identification Mark', value: details.identification_mark?.value },
      { key: 'whether_the_pet_is_sterilized', label: 'Pet Sterilized', value: details.whether_the_pet_is_sterilized?.value },
      { key: 'whether_the_pet_is_adopted_from_street', label: 'Adopted from Street', value: details.whether_the_pet_is_adopted_from_street?.value },
    ]
    
    // Medical/Vaccination Fields
    selectedItem.value.medicalFields = [
      { key: 'whether_anti_rabies_vaccination_arv_is_administered_to_the_dog', label: 'Anti-Rabies Vaccination', value: details.whether_anti_rabies_vaccination_arv_is_administered_to_the_dog?.value },
      { key: 'if_yes_arv_administered_date', label: 'ARV Date', value: details.if_yes_arv_administered_date?.value },
      { key: 'last_date_of_de_worming', label: 'Last De-Worming Date', value: details.last_date_of_de_worming?.value },
      { key: 'other_vaccination_given', label: 'Other Vaccinations', value: details.other_vaccination_given?.value },
      { key: 'previous_license_no_from_tcmc_if_any_tcmc', label: 'Previous License No', value: details.previous_license_no_from_tcmc_if_any_tcmc?.value },
    ]
    
    // Veterinary Fields
    selectedItem.value.vetFields = [
      { key: 'in_case_treated_in_government_veterinary_dispensary_mention_name', label: 'Govt. Vet Dispensary', value: details.in_case_treated_in_government_veterinary_dispensary_mention_name?.value },
      { key: 'name_of_the_veterinary_doctor_treating_the_pet', label: 'Veterinary Doctor Name', value: details.name_of_the_veterinary_doctor_treating_the_pet?.value },
      { key: 'veterinary_doctor_mobile_number', label: 'Vet Mobile Number', value: details.veterinary_doctor_mobile_number?.value },
      { key: 'tamilnadu_veterinary_council_number_indian_veterinary_council_number', label: 'Vet Council Number', value: details.tamilnadu_veterinary_council_number_indian_veterinary_council_number?.value },
    ]
  }
  
  detailsModalOpen.value = true
}

const closeDetailsModal = () => {
  detailsModalOpen.value = false
  selectedItem.value = null
}

const transformApiData = (apiData: any): PetItem => {
  const details = apiData.details || {}
  
  let petType = 'other'
  const species = details.species?.value?.toLowerCase() || ''
  if (species.includes('canine') || species.includes('dog')) {
    petType = 'dog'
  } else if (species.includes('feline') || species.includes('cat')) {
    petType = 'cat'
  }
  
  return {
    id: apiData.student_id,
    student_id: apiData.student_id,
    referenceNo: `PET-${apiData.student_id}`,
    petName: details.pet_name?.value || '-',
    petId: `PID${apiData.student_id}`,
    petType: petType,
    currentStatus: 'Pending',
    rejectedReason: null,
    officialRemark: null,
    registrationDate: apiData.registration_date || new Date().toISOString(),
    ownerName: details.owner_name?.value || '-',
    mobileNumber: details.mobile_number?.value || '-',
    emailId: details.email_id?.value || '-',
    species: details.species?.value || '-',
    breed: details.breed?.value || '-',
    colour: details.colour?.value || '-',
    sex: details.sex?.value || '-',
    ageYears: details.age_years?.value || '-',
    petPhoto: details.pet_photo?.value || '',
    ownerPhoto: details.pet_owner_photo?.value || '',
    allDetails: details,
    created_at: apiData.registration_date || new Date().toISOString(),
    updated_at: apiData.registration_date || new Date().toISOString()
  }
}

const getStatusClass = (status: string) => {
  switch(status) {
    case 'Approved':
      return 'badge-light-success'
    case 'Rejected':
      return 'badge-light-danger'
    case 'Pending':
      return 'badge-light-warning'
    case 'Under Review':
      return 'badge-light-info'
    default:
      return 'badge-light-secondary'
  }
}

const formatDate = (dateString: string) => {
  if (!dateString || dateString === '-') return '-'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (e) {
    return '-'
  }
}

const downloadCertificate = (item: PetItem) => {
  if (item.currentStatus !== 'Approved') {
    showToast('Certificate only available for approved pets', 'error')
    return
  }
  showToast(`Downloading certificate for ${item.petName}...`, 'success')
}

const openSlider = () => {
  sliderOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeSlider = () => {
  sliderOpen.value = false
  document.body.style.overflow = ''
  resetForm()
}

const fetchData = async () => {
  loading.value = true
  try {
    const response = await ApiService.getPetDetailsRecord()
    
    if (response.success && response.data) {
      items.value = response.data.map((item: any) => transformApiData(item))
      showToast(`Loaded ${response.count} pet records successfully`, 'success')
    } else {
      showToast('Failed to load pet records', 'error')
      items.value = []
    }
  } catch (error) {
    console.error('Error fetching pet records:', error)
    showToast('Error loading pet records', 'error')
    items.value = []
  } finally {
    loading.value = false
  }
}

const handleSubmit = () => {
  if (!formData.ownerName.trim() || !formData.mobileNumber.trim() || !formData.petName.trim() || !formData.species) {
    showToast('Please fill all required fields', 'error')
    return
  }

  submitting.value = true
  
  setTimeout(() => {
    if (editMode.value && editingId.value !== null) {
      const index = items.value.findIndex(item => item.id === editingId.value)
      if (index !== -1) {
        items.value[index].ownerName = formData.ownerName
        items.value[index].mobileNumber = formData.mobileNumber
        items.value[index].emailId = formData.emailId
        items.value[index].petName = formData.petName
        items.value[index].species = formData.species
        items.value[index].breed = formData.breed
        items.value[index].colour = formData.colour
        items.value[index].sex = formData.sex
        items.value[index].ageYears = formData.ageYears
        items.value[index].currentStatus = formData.currentStatus
        items.value[index].rejectedReason = formData.rejectedReason || null
        items.value[index].officialRemark = formData.officialRemark || null
        items.value[index].updated_at = new Date().toISOString()
      }
      showToast('Pet details updated successfully!', 'success')
    } else {
      showToast('Add functionality needs API endpoint', 'error')
    }
    
    submitting.value = false
    closeSlider()
  }, 800)
}

const deleteItem = async (id: number) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  })

  if (!result.isConfirmed) {
    return
  }

  const index = items.value.findIndex(item => item.id === id)
  if (index !== -1) {
    items.value.splice(index, 1)
    Swal.fire({
      icon: 'success',
      title: 'Deleted successfully!',
      timer: 1500,
      showConfirmButton: false
    })
  }
}

const editItem = (item: PetItem) => {
  editMode.value = true
  viewMode.value = false
  editingId.value = item.id
  formData.referenceNo = item.referenceNo
  formData.petName = item.petName
  formData.petId = item.petId
  formData.petType = item.petType
  formData.currentStatus = item.currentStatus
  formData.rejectedReason = item.rejectedReason || ''
  formData.officialRemark = item.officialRemark || ''
  formData.registrationDate = item.registrationDate.substring(0, 16)
  formData.ownerName = item.ownerName
  formData.mobileNumber = item.mobileNumber
  formData.emailId = item.emailId
  formData.species = item.species
  formData.breed = item.breed
  formData.colour = item.colour
  formData.sex = item.sex
  formData.ageYears = item.ageYears
  openSlider()
}

const resetForm = () => {
  formData.referenceNo = ''
  formData.petName = ''
  formData.petId = ''
  formData.petType = ''
  formData.currentStatus = 'Pending'
  formData.rejectedReason = ''
  formData.officialRemark = ''
  formData.registrationDate = ''
  formData.ownerName = ''
  formData.mobileNumber = ''
  formData.emailId = ''
  formData.species = ''
  formData.breed = ''
  formData.colour = ''
  formData.sex = ''
  formData.ageYears = ''
  editMode.value = false
  viewMode.value = false
  editingId.value = null
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.table th {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.badge-light-success {
  background-color: #e8fff3;
  color: #50cd89;
}

.badge-light-danger {
  background-color: #fff5f8;
  color: #f1416c;
}

.badge-light-warning {
  background-color: #fff8dd;
  color: #ffc700;
}

.badge-light-info {
  background-color: #f1faff;
  color: #009ef7;
}

.badge-light-primary {
  background-color: #f1faff;
  color: #009ef7;
}

.badge-light-secondary {
  background-color: #f5f8fa;
  color: #7e8299;
}

.border-hover-primary {
  border: 1px solid #e4e6ef;
  transition: all 0.3s ease;
}

.border-hover-primary:hover {
  border-color: #009ef7;
  box-shadow: 0 0.5rem 1rem rgba(0, 158, 247, 0.15);
  transform: translateY(-2px);
}

.border-hover-success {
  border: 1px solid #e4e6ef;
  transition: all 0.3s ease;
}

.border-hover-success:hover {
  border-color: #50cd89;
  box-shadow: 0 0.5rem 1rem rgba(80, 205, 137, 0.15);
  transform: translateY(-2px);
}

.border-hover-warning {
  border: 1px solid #e4e6ef;
  transition: all 0.3s ease;
}

.border-hover-warning:hover {
  border-color: #ffc700;
  box-shadow: 0 0.5rem 1rem rgba(255, 199, 0, 0.15);
  transform: translateY(-2px);
}

.cursor-pointer {
  cursor: pointer;
  transition: all 0.2s ease;
}

.cursor-pointer:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.15em;
}

.form-label.required::after {
  content: '*';
  color: #f1416c;
  margin-left: 4px;
}

.card.shadow-sm {
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1) !important;
  border: 1px solid #e4e6ef;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card.shadow-sm:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.slider-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.side-slider {
  position: fixed;
  top: 0;
  right: -650px;
  width: 650px;
  max-width: 100%;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
}

.side-slider.slider-open {
  right: 0;
}

.slider-header {
  padding: 20px 25px;
  border-bottom: 1px solid #e4e6ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
}

.slider-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #181c32;
}

.btn-close-slider {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #7e8299;
  transition: color 0.2s;
}

.btn-close-slider:hover {
  color: #181c32;
}

.slider-body {
  padding: 25px;
  overflow-y: auto;
  flex: 1;
}

.toast {
  min-width: 300px;
  margin-bottom: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-body {
  display: flex;
  align-items: center;
  padding: 0.75rem;
}

@media (max-width: 991px) {
  .side-slider {
    width: 100%;
    right: -100%;
  }
}

@media (max-width: 576px) {
  .slider-body {
    padding: 15px;
  }
  
  .slider-header {
    padding: 15px;
  }
  
  .slider-title {
    font-size: 1.1rem;
  }
  
  .toast {
    min-width: 250px;
  }
}

#kt_app_content {
  width: 100%;
  transition: all 0.3s ease;
}

.app-container {
  width: 100%;
  max-width: 100%;
  padding: 20px;
  transition: all 0.3s ease;
}

body.app-sidebar-minimize .app-container {
  padding-left: 25px;
  padding-right: 25px;
}

.rotating-spinner {
  width: 60px;
  height: 60px;
  animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pet-icons-container-dual {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pet-icon-small {
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
}

.pet-icon-left {
  left: -1px;
}

.pet-icon-right {
  right: -1px;
}

.pet-icon-single {
  width: 86px;
  height: 86px;
  object-fit: contain;
  display: block;
}

.symbol-label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
}

.modal.show {
  display: block;
}
</style>