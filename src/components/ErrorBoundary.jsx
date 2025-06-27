// src/components/ErrorBoundary.jsx
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught:', error, errorInfo)
    this.setState({ errorInfo })
    // Anda bisa menambahkan error logging ke service seperti Sentry di sini
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-red-50 border border-red-200 rounded-lg p-4 my-4'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-red-600 font-semibold flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              Terjadi Kesalahan
            </h3>

            <p className='text-red-700 text-sm'>
              {this.state.error?.toString() || 'Komponen gagal dimuat'}
            </p>

            <div className='flex gap-2 mt-2'>
              <button
                onClick={this.handleRetry}
                className='px-3 py-1 bg-red-100 text-red-800 rounded text-sm hover:bg-red-200 transition'>
                Coba Lagi
              </button>

              <button
                onClick={() => window.location.reload()}
                className='px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm hover:bg-gray-200 transition'>
                Muat Ulang Halaman
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}
