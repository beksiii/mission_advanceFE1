import PropTypes from 'prop-types'

export default function StarRating({ rating, totalReviews, className = '' }) {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label={`Rating: ${rating} dari 5 bintang`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns='http://www.w3.org/2000/svg'
          className={`w-5 h-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path d='M12 .587l3.668 7.568L24 9.75l-6 5.854L19.336 24 12 19.897 4.664 24 6 15.604 0 9.75l8.332-1.595z' />
        </svg>
      ))}
      <span className='text-white text-sm'>
        {rating.toFixed(1)} ({totalReviews} review)
      </span>
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
  className: PropTypes.string,
}
