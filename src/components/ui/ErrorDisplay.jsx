export default function ErrorDisplay({ message, onRetry }) {
  return (
    <div className='text-center py-8' role='alert'>
      <p className='text-red-500 font-medium mb-4'>⚠️ {message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className='px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition'>
          Coba Lagi
        </button>
      )}
    </div>
  )
}
