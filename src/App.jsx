import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import CourseDetail from './pages/CourseDetail'

// import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/course/:id' element={<CourseDetail />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
