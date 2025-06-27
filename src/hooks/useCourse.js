import { useState, useEffect } from 'react'
import axios from 'axios'

export function useCourse(id) {
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true)

        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/courses/${id}`

        console.log('Final URL:', apiUrl)

        const response = await axios.get(apiUrl)

        if (!response.data) {
          throw new Error('Data course tidak ditemukan')
        }

        setCourse(response.data)
        setError(null)
      } catch (err) {
        console.error('Error details:', {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
        })

        setError(
          err.response?.status === 404
            ? 'Course tidak ditemukan'
            : err.message || 'Gagal memuat data course'
        )
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCourse()
    } else {
      setError('ID Course tidak valid')
      setLoading(false)
    }
  }, [id])

  return { course, loading, error }
}
