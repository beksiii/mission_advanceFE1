import PropTypes from 'prop-types'

export default function LoadingSpinner({
  size = 'md',
  color = 'primary',
  className = '',
}) {
  // Variasi ukuran
  const sizeClasses = {
    sm: 'h-8 w-8 border-2',
    md: 'h-12 w-12 border-t-2 border-b-2',
    lg: 'h-16 w-16 border-t-4 border-b-4',
  }

  // Variasi warna
  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    gray: 'border-gray-400',
    white: 'border-white',
  }

  return (
    <div
      className={`flex justify-center items-center py-12 ${className}`}
      data-testid='loading-spinner'
      role='status'
      aria-label='Loading'>
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
        style={{ animationDuration: '0.8s' }}>
        {/* Optional: Inner element untuk efek tambahan */}
        <span className='sr-only'>Loading...</span>
      </div>

      {/* Optional: Text loading */}
      <span className='ml-3 text-gray-500' aria-hidden='true'>
        Memuat...
      </span>
    </div>
  )
}

// Prop Types (opsional)
LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'gray', 'white']),
  className: PropTypes.string,
}
