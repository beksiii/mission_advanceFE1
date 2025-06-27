import React from 'react'

const CardSection = ({ title, subtitle, children }) => {
  // console.log(children, 'cek children di CardSection')
  return (
    <section className='w-full min-w-[320px] md:max-w-[1200px] h-fit flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h3 className='font-poppins font-semibold text-[24px] md:text-[32px] text-text-dark-primary leading-myline-1 tracking-myletter-1'>
          {title}
        </h3>
        {subtitle && (
          <p className='font-dm-sans font-medium text-xs md:text-[16px] leading-myline-2 tracking-myletter-2 text-text-dark-secondary'>
            {subtitle}
          </p>
        )}
      </div>

      <div className='card-section-content'>{children}</div>
    </section>
  )
}

export default CardSection
