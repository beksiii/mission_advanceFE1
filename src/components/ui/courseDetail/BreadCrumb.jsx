import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumb({ currentTitle }) {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  const generatePathName = path => {
    return path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  }

  return (
    <nav className='w-full text-sm text-text-dark-secondary text-left'>
      <ol className='flex gap-1'>
        <li>
          <Link
            to='/'
            className='font-dm-sans font-normal text-base text-text-dark-secondary hover:underline'>
            Beranda
          </Link>
        </li>
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1
          const to = '/' + paths.slice(0, index + 1).join('/')

          return (
            <li key={index} className='flex items-center'>
              <span className='mx-2'>/</span>
              {isLast ? (
                <span className='font-dm-sans font-normal text-base text-text-dark-primary'>
                  {currentTitle || generatePathName(path)}
                </span>
              ) : (
                <Link
                  to={to}
                  className='font-dm-sans font-normal text-base text-text-dark-secondary hover:underline'>
                  {generatePathName(path)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
