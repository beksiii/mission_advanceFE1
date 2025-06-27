import { useState } from 'react'
import { ChevronDown, ChevronUp, Video } from 'lucide-react'

export default function CourseModules({ modules }) {
  const [openModules, setOpenModules] = useState({})

  const toggle = i => {
    setOpenModules(prev => ({
      ...prev,
      [i]: !prev[i], // Toggle state per module tanpa mengubah yang lain
    }))
  }

  return (
    <div className='bg-bg-primary rounded-lg border border-border-default flex flex-col p-5 gap-5 md:p-6 md:gap-6'>
      <h5 className='text-lg md:text-xl font-semibold font-poppins text-text-dark-primary leading-myline-1 '>
        Kamu akan Mempelajari
      </h5>
      <div className='flex flex-col gap-6'>
        {modules.map((module, i) => (
          <div className='flex flex-col gap-3' key={i}>
            <button
              onClick={() => toggle(i)}
              className='w-full flex justify-between items-center text-left '>
              <span className=' text-primary font-semibold font-poppins text-lg leading-myline-1 tracking-myletter-1 '>
                {module.title}
              </span>
              {openModules[i] ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openModules[i] && module.lessons.length > 0 && (
              <div className='space-y-3'>
                {module.lessons.map((lesson, j) => (
                  <div
                    key={j}
                    className='flex items-center border border-border-default rounded-md justify-between text-base md:p-5 text-text-dark-primary font-medium leading-myline-2 tracking-myletter-2'>
                    <span>{lesson.title}</span>
                    <div className='flex items-center gap-2 text-gray-500'>
                      <Video size={16} />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
