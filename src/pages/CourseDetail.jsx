import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import MainContainer from '../components/layout/MainContainer'
import BreadCrumb from '../components/ui/courseDetail/BreadCrumb'
import Banner from '../components/ui/Banner'
import CourseOverview from '../components/ui/courseDetail/CourseOverview'
import InstructorList from '../components/ui/courseDetail/InstructorList'
import CourseModules from '../components/ui/courseDetail/CourseModules'
import Footer from '../components/layout/Footer'
import ReviewSection from '../components/ui/courseDetail/ReviewSection'
import CourseSidebar from '../components/ui/courseDetail/CourseSidebar'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorDisplay from '../components/ui/ErrorDisplay'
import { useCourse } from '../hooks/useCourse'
import StarRating from '../components/ui/StarRating'
import ErrorBoundary from '../components/ErrorBoundary'

export default function CourseDetail() {
  const { id } = useParams()
  const { course, loading, error } = useCourse(id)

  // Handle loading state
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <LoadingSpinner size='lg' />
      </div>
    )
  }

  // Handle error state
  if (error) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center p-4'>
        <ErrorDisplay
          message={error}
          onRetry={() => window.location.reload()}
        />
        <button
          onClick={() => window.history.back()}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
          Kembali ke Daftar Course
        </button>
      </div>
    )
  }

  // Handle course not found
  if (!course) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center p-4 text-center'>
        <h2 className='text-2xl font-bold mb-2'>Course Tidak Ditemukan</h2>
        <p className='mb-4'>Course dengan ID {id} tidak tersedia</p>
        <button
          onClick={() => window.history.back()}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
          Kembali
        </button>
      </div>
    )
  }

  // Prepare data with fallbacks
  const courseData = {
    title: course.title || 'Untitled Course',
    description: course.description || 'No description available',
    image: course.image || '/default-course.jpg',
    rating: course.rating || 0,
    totalReview: course.totalReview || 0,
    detailDescription: course.detailDescription || 'No detailed description',
    instructors: Array.isArray(course.instructors) ? course.instructors : [],
    modules: Array.isArray(course.modules) ? course.modules : [],
  }

  return (
    <>
      <Navbar />
      <MainContainer>
        <BreadCrumb currentTitle={courseData.title} className='mb-4' />

        <Banner
          title={courseData.title}
          description={courseData.description}
          imageSrc={courseData.image}
          overlayOpacity={70}
          aria-label={`Banner untuk course ${courseData.title}`}
          titleClass='font-poppins text-xl md:text-4xl font-bold text-white text-left'
          descriptionClass='text-sm md:text-base font-normal text-white text-left'>
          <StarRating
            rating={courseData.rating}
            totalReviews={courseData.totalReview}
            className='mt-2'
          />
        </Banner>

        <div className='flex flex-col lg:flex-row gap-6 md:gap-8 mt-8'>
          <main className='flex-1 space-y-8'>
            <ErrorBoundary>
              <CourseOverview
                content={courseData.detailDescription}
                className='bg-white rounded-lg shadow p-6'
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <InstructorList
                instructor={course.instructor}
                role={course.role}
                avatar={course.avatar}
                description={course.instructorDescription}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <CourseModules
                modules={courseData.modules}
                className='bg-white rounded-lg shadow p-6'
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <ReviewSection
                courseId={course.id}
                className='bg-white rounded-lg shadow p-6'
              />
            </ErrorBoundary>
          </main>

          <aside className='lg:w-80 flex-shrink-0'>
            <ErrorBoundary>
              <CourseSidebar course={course} className='sticky top-4' />
            </ErrorBoundary>
          </aside>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
