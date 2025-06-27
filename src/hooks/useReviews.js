import { useState, useEffect } from 'react'
import axios from 'axios'

// ✅ Gunakan base URL proxy
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/reviews`

export function useReviews(courseId) {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      if (!courseId) {
        setReviews([])
        return
      }

      try {
        setLoading(true)
        const response = await axios.get(`${API_URL}?courseId=${courseId}`)
        console.log('Fetched reviews:', response.data)
        setReviews(response.data)
        setError(null) // reset error jika berhasil
      } catch (err) {
        setError(err.message || 'Gagal mengambil review')
        console.error('Review fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [courseId])

  const addReview = async reviewData => {
    try {
      const response = await axios.post(API_URL, reviewData)
      setReviews(prev => [...prev, response.data])
      setError(null)
    } catch (err) {
      console.error('Add review error:', err)
      setError('Gagal menambahkan review')
    }
  }

  const updateReview = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData)
      setReviews(prev =>
        prev.map(r => (r.id === id ? { ...r, ...updatedData } : r))
      )
      setError(null)
    } catch (err) {
      console.error('Update review error:', err)
      setError('Gagal mengupdate review')
    }
  }

  const deleteReview = async id => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setReviews(prev => prev.filter(r => r.id !== id))
      setError(null)
    } catch (err) {
      console.error('Delete review error:', err)
      setError('Gagal menghapus review')
    }
  }

  return {
    reviews,
    loading,
    error,
    addReview,
    updateReview,
    deleteReview,
  }
}
