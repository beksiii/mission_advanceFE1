import PropTypes from 'prop-types'

export default function InstructorList({
  instructor, // Mengubah dari instructors (array) ke instructor (objek)
  role,
  avatar,
  description,
}) {
  return (
    <div className='bg-bg-primary rounded-lg border border-border-default p-6'>
      <h5 className='text-lg md:text-xl font-semibold font-poppins mb-4'>
        Belajar bersama Tutor Profesional
      </h5>

      <div className='bg-white border border-border-default p-4 rounded-lg'>
        <div className='flex items-center gap-3'>
          <img
            src={avatar || '/default-avatar.png'}
            alt={instructor || 'Instruktur'}
            className='w-10 h-10 rounded-[10px] object-cover'
            onError={e => {
              e.target.src = '/default-avatar.png'
            }}
          />
          <div>
            <p className='font-medium'>{instructor || 'Nama Instruktur'}</p>
            <p className='text-sm text-text-dark-secondary'>
              {role || 'Peran Instruktur'}
            </p>
          </div>
        </div>

        {description && (
          <p className='mt-3 text-sm text-text-dark-primary'>{description}</p>
        )}
      </div>
    </div>
  )
}

InstructorList.propTypes = {
  instructor: PropTypes.string,
  role: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
}
