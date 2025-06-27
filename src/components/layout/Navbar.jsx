import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cek apakah berada di halaman login atau register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // Cek status login saat komponen dimuat
  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('userData'));
    
    if (status === 'true' && user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserData(null);
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  // Tutup dropdown ketika klik di luar area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown, mobileMenuOpen]);

  return (
    <nav className="w-full max-w-[360px] md:max-w-[1440px] h-fit 
         bg-bg-primary border-b border-border-default
         max-sm:border-t max-sm:border-border-default
         max-sm:[box-shadow:0_4px_12px_0_rgba(53,67,74,0.15)]
         flex items-center px-6 sm:px-8 md:px-[120px] py-4 sm:py-6 md:py-3 relative z-50 justify-between">
      
      <div className="flex items-center gap-10">
        <Link to="/" className="h-fit gap-[60px]">
          <img
            src="/logoMaster.png"
            alt="Logo"
            className="w-[152px] h-[42px] sm:w-[237px] sm:h-[56px]"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Kategori hanya muncul jika bukan di halaman auth */}
        {!isAuthPage && (
          <Link
            to="/categories"
            className="hidden sm:block px-4 py-2 text-sm sm:text-base text-text-dark-primary font-medium hover:text-primary transition"
          >
            Kategori
          </Link>
        )}
        
        {isLoggedIn ? (
          <div className="relative dropdown-container">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={userData?.profilePic}
                alt="Profile"
                className="w-11 h-11 rounded-xl object-cover"
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-border-default">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-text-dark-primary hover:bg-gray-100 transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Profil Saya
                </Link>
                <Link
                  to="/my-classes"
                  className="block px-4 py-2 text-sm text-text-dark-primary hover:bg-gray-100 transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Kelas Saya
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 text-sm text-text-dark-primary hover:bg-gray-100 transition-colors"
                  onClick={() => setShowDropdown(false)}
                >
                  Pesanan Saya
                </Link>
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Tombol login/register hanya muncul jika bukan di halaman auth
          !isAuthPage && (
            <>
              <Link
                to="/login"
                className="bg-primary px-4 py-2 rounded-lg text-sm sm:text-base text-text-light-primary font-medium hover:bg-primary-dark transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm sm:text-base text-primary bg-bg-primary px-4 py-2 border border-primary rounded-lg font-medium hover:bg-primary-light transition"
              >
                Register
              </Link>
            </>
          )
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container absolute top-full left-0 right-0 bg-white shadow-lg py-2 z-50 border-t border-gray-200 sm:hidden">
          {/* Kategori hanya muncul jika bukan di halaman auth */}
          {!isAuthPage && (
            <Link
              to="/categories"
              className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kategori
            </Link>
          )}
          
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profil Saya
              </Link>
              <Link
                to="/my-classes"
                className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kelas Saya
              </Link>
              <Link
                to="/orders"
                className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pesanan Saya
              </Link>
              <div className="border-t border-gray-200 my-1"></div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-6 py-3 text-red-600 hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            // Menu login/register hanya muncul jika bukan di halaman auth
            !isAuthPage && (
              <>
                <div className="border-t border-gray-200 my-1"></div>
                <Link
                  to="/login"
                  className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-6 py-3 text-text-dark-primary hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;