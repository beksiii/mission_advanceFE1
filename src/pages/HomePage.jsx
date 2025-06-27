import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import MainContainer from '../components/layout/MainContainer'
import Navbar from '../components/layout/Navbar'
import Banner from '../components/ui/Banner'
import Button from '../components/form/Button'
import CardSection from '../components/ui/CardSection'
import Tabs from '../components/ui/Tabs'
import Card from '../components/ui/Card'
import Footer from '../components/layout/Footer'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorDisplay from '../components/ui/ErrorDisplay'

export default function HomePage() {
  // State management
  const [activeTab, setActiveTab] = useState(0)
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)

  // Categories for tabs
  const categories = [
    'Semua Kelas',
    'Pemasaran',
    'Desain',
    'Pengembangan Diri',
    'Bisnis',
  ]

  // Filter courses based on active tab
  const filteredCourses =
    activeTab === 0
      ? courses
      : courses.filter(course => course.category === categories[activeTab])

  // Fetch courses data
  const fetchCourses = async () => {
    setIsLoading(true)
    try {
      const API_URL = `${import.meta.env.VITE_API_BASE_URL}/courses`
      if (!API_URL) throw new Error('API URL is missing')

      const response = await axios.get(API_URL)
      setCourses(response.data)
      setError(null)
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Gagal memuat data kursus'
      )
      console.error('Fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle newsletter submission
  const handleNewsletterSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubscriptionSuccess(true)
      setEmail('')
      setTimeout(() => setSubscriptionSuccess(false), 3000)
    } catch {
      setError('Gagal berlangganan newsletter')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchCourses()
  }, [])

  return (
    <>
      <Navbar />
      <MainContainer>
        {/* Hero Banner */}
        <Banner>
          <div className='mt-3 flex justify-center'>
            <div className='w-fit text-text-light-primary'>
              <Button
                variant='primary'
                onClick={() => console.log('Tombol diklik')}
                aria-label='Temukan Video Course'>
                Temukan Video Course untuk Dipelajari!
              </Button>
            </div>
          </div>
        </Banner>

        {/* Courses Section */}
        <CardSection
          title='Koleksi Video Pembelajaran Unggulan'
          subtitle='Jelajahi Dunia Pengetahuan Melalui Pilihan Kami'>
          <div className='mb-8'>
            <Tabs
              tabs={categories}
              defaultTab={activeTab}
              onTabChange={setActiveTab}
              aria-label='Filter Kategori Kursus'
            />
          </div>

          {/* Loading, Error, or Content */}
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorDisplay message={error} onRetry={fetchCourses} />
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <div key={course.id} className='w-full'>
                    <Card {...course} />
                  </div>
                ))
              ) : (
                <p className='w-full text-center py-8 text-gray-500 col-span-full'>
                  Tidak ada kursus tersedia untuk kategori ini
                </p>
              )}
            </div>
          )}
        </CardSection>

        {/* Newsletter Banner */}
        <Banner
          imageSrc='https://res.cloudinary.com/drgdnsdvu/image/upload/v1750166947/react-app/react-app/banner2.jpg'
          newsLetter='NEWSLETTER'
          title='Mau Belajar Lebih Banyak?'
          titleClass='font-poppins text-2xl md:text-[32px] font-semibold text-text-light-primary text-center leading-myline-1'
          description='Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id'
          descriptionClass='font-sans text-[14px] md:text-[16px] font-normal text-text-light-primary text-center mx-auto leading-myline-2 tracking-myletter-2 max-w-[525px]'>
          {subscriptionSuccess && (
            <div className='mb-4 p-3 bg-green-100 text-green-700 rounded text-center'>
              Berhasil berlangganan newsletter!
            </div>
          )}
          <form
            onSubmit={handleNewsletterSubmit}
            className='w-full max-w-[525px] flex flex-col sm:flex-row gap-2 sm:gap-5 rounded-xl overflow-hidden shadow-sm border border-border-default bg-bg-primary mx-auto mt-5 py-2 pl-4 sm:pl-8 pr-2'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Masukkan Emailmu'
              className='flex-1 text-base text-text-dark-secondary placeholder:text-text-dark-secondary focus:outline-none bg-transparent px-2 py-3 sm:py-0'
              required
              aria-required='true'
              disabled={isSubmitting}
            />
            <Button
              type='submit'
              variant='contained'
              className='bg-secondary rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-text-light-primary font-semibold text-sm md:text-base hover:bg-secondary-400 transition duration-300 w-full sm:w-auto'
              disabled={isSubmitting}>
              {isSubmitting ? 'Memproses...' : 'Subscribe'}
            </Button>
          </form>
        </Banner>
      </MainContainer>
      <Footer />
    </>
  )
}

// Prop Types validation
HomePage.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      // Add other required props here
    })
  ),
}
