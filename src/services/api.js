import axios from 'axios'

// Buat instance axios dengan config default
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_MOCKAPI_URL,
  timeout: 10000, // 10 detik timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

// Service untuk courses
const CourseService = {
  /**
   * Get all courses
   * @returns {Promise<Array>} List of courses
   */
  async getAll() {
    try {
      const response = await apiClient.get('/courses')
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  },

  /**
   * Get single course by ID
   * @param {string|number} id - Course ID
   * @returns {Promise<Object>} Course data
   */
  async getById(id) {
    try {
      const response = await apiClient.get(`/courses/${id}`)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  },

  /**
   * Handle API errors
   * @param {Error} error
   * @returns {Error} Formatted error
   */
  handleError(error) {
    if (error.response) {
      // Server responded with non-2xx status
      const message =
        error.response.data?.message || 'Terjadi kesalahan pada server'
      const status = error.response.status

      return new Error(`${message} (Status: ${status})`)
    } else if (error.request) {
      // Request dibuat tapi tidak ada response
      return new Error('Tidak ada respon dari server')
    } else {
      // Error saat setup request
      return new Error('Gagal membuat permintaan')
    }
  },
}

export default CourseService
