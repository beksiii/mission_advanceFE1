import React from 'react'

const CourseOverview = ({ content }) => {
  return (
    <div className='bg-bg-primary rounded-lg border border-border-default flex flex-col p-5 gap-5 md:p-6 md:gap-6'>
      <h5 className='text-lg md:text-xl font-semibold font-poppins text-text-dark-primary leading-myline-1 '>
        Deskripsi
      </h5>
      <p className='text-[14px] md:text-base text-text-dark-secondary font-normal leading-myline-2 tracking-myletter-2'>
        {content}
      </p>
    </div>
  )
}

export default CourseOverview
