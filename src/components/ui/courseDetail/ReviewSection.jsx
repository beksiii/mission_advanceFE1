import { useState } from 'react'
import { useReviews } from '../../../hooks/useReviews'

export default function ReviewSection({ courseId }) {
  const { reviews, loading, error, addReview, updateReview, deleteReview } =
    useReviews(courseId)

  const [form, setForm] = useState({
    name: '',
    rating: 0,
    comment: '',
    courseId,
  })

  const [editId, setEditId] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    if (editId) {
      await updateReview(editId, form)
    } else {
      await addReview(form)
    }

    setForm({ name: '', rating: 0, comment: '', courseId })
    setEditId(null)
  }

  const handleEdit = review => {
    setForm({
      name: review.name,
      rating: review.rating,
      comment: review.comment,
      courseId: review.courseId,
    })
    setEditId(review.id)
  }

  const renderStars = rating => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  if (loading) return <div>Memuat review...</div>
  if (error) return <div className='text-red-500'>{error}</div>

  return (
    <div className='bg-bg-primary rounded-lg border border-border-default flex flex-col p-5 gap-5 md:p-6 md:gap-6'>
      <h5 className='text-lg md:text-xl font-semibold font-poppins text-text-dark-primary leading-myline-1'>
        Rating dan Review
      </h5>

      {/* Form */}
      <form onSubmit={handleSubmit} className='mb-6 flex flex-col gap-2'>
        <input
          type='text'
          placeholder='Nama'
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className='border border-border-default p-2 rounded'
          required
        />

        <div className='flex items-center gap-2'>
          <label>Rating:</label>
          <select
            value={form.rating}
            onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
            className='border border-border-default p-2 rounded'
            required>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <textarea
          placeholder='Komentar'
          value={form.comment}
          onChange={e => setForm({ ...form, comment: e.target.value })}
          className='border border-border-default p-2 rounded'
          required
        />

        <button
          type='submit'
          className='bg-primary text-white font-poppins font-medium py-2 px-4 rounded w-fit'
          disabled={loading}>
          {editId ? 'Update Review' : 'Kirim Review'}
        </button>
      </form>

      {/* List Reviews */}
      <div className='grid sm:grid-cols-2 gap-4'>
        {reviews.length === 0 ? (
          <p className='text-gray-500'>Belum ada review.</p>
        ) : (
          reviews.map(review => (
            <div
              key={review.id}
              className='border rounded-lg p-4 bg-white shadow-sm'>
              <div className='flex items-center gap-3 mb-3'>
                <img
                  src='/images/avatar-default.png'
                  alt='avatar'
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <p className='font-semibold'>{review.name}</p>
                </div>
              </div>
              <p className='text-gray-700 mb-2'>{review.comment}</p>
              <div className='flex items-center gap-1 text-sm'>
                {renderStars(review.rating)}
                <span className='ml-2 text-gray-600'>
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <div className='flex gap-3 mt-2 text-sm'>
                <button
                  className='text-blue-500'
                  onClick={() => handleEdit(review)}>
                  Edit
                </button>
                <button
                  className='text-red-500'
                  onClick={() => deleteReview(review.id)}>
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
