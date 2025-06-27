import {
  FaFileAlt,
  FaVideo,
  FaCertificate,
  FaEdit,
  FaLanguage,
  FaCheckCircle,
} from 'react-icons/fa'

export default function CourseSidebar({
  courseId,
  courses = [],
  price = 'Rp 250K',
  originalPrice = 'Rp 500K',
  discount = 50,
}) {
  // Temukan course berdasarkan ID
  const course = courses.find(c => c.id === courseId)

  // Hitung total video dari semua modules
  const totalVideos =
    course?.modules?.reduce((total, module) => {
      return (
        total + module.lessons.filter(lesson => lesson.type === 'Video').length
      )
    }, 0) || 0

  return (
    <div className='bg-bg-primary rounded-lg border border-border-default flex flex-col h-fit p-5 gap-5 md:p-6 md:gap-6'>
      <h3 className='text-lg font-semibold leading-myline-1 text-text-dark-primary tracking-myletter-1 font-poppins'>
        {/* Gapai Karier Impianmu sebagai <br /> */}
        <span className='text-text-dark-primary'>{course?.title}</span>
      </h3>

      {/* Harga */}
      <div className='flex items-center gap-3'>
        <p className='text-lg font-bold text-green-600'>
          {course?.price || price}
        </p>
        <p className='line-through text-gray-400'>{originalPrice}</p>
        <span className='bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded'>
          Diskon {discount}%
        </span>
      </div>

      {/* Info Penawaran */}
      <p className='text-sm text-blue-600'>
        Penawaran spesial tersisa <b>2 hari lagi!</b>
      </p>

      {/* Tombol beli */}
      <button className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold'>
        Beli Sekarang
      </button>

      {/* Fasilitas */}
      <div className='pt-4'>
        <p className='font-medium'>Kelas Ini Sudah Termasuk</p>
        <ul className='text-sm text-gray-700 space-y-2'>
          <li className='flex items-center gap-2'>
            <FaEdit className='text-gray-500' />
            Ujian Akhir
          </li>
          <li className='flex items-center gap-2'>
            <FaVideo className='text-gray-500' />
            {totalVideos} Video
          </li>
          <li className='flex items-center gap-2'>
            <FaFileAlt className='text-gray-500' />
            {course?.modules?.length || 0} Modul
          </li>
          <li className='flex items-center gap-2'>
            <FaCertificate className='text-gray-500' />
            Sertifikat
          </li>
          <li className='flex items-center gap-2'>
            <FaCheckCircle className='text-gray-500' />
            Pretest
          </li>
        </ul>
      </div>

      {/* Bahasa */}
      <div className='pt-4'>
        <p className='font-medium'>Bahasa Pengantar</p>
        <p className='flex items-center gap-2 text-sm text-gray-700'>
          <FaLanguage className='text-gray-500' />
          Bahasa Indonesia
        </p>
      </div>
    </div>
  )
}
