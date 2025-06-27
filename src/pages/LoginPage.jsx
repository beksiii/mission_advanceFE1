import LoginForm from "../components/form/LoginForm";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/layout/MainContainer";
import Navbar from "../components/layout/Navbar";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    console.log("Login:", email, password);

    if (email && password) {
      // Simpan data login ke localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify({
        email: email,
        profilePic: "https://res.cloudinary.com/drgdnsdvu/image/upload/v1750166944/react-app/react-app/avatar-user.png",
      }));
      
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <LoginForm
          onSubmit={handleLogin}
          onRegister={() => navigate("/register")}
          onForgotPassword={() => navigate("/forgot-password")}
          onGoogleLogin={() => console.log("Login pakai Google")}
        />
      </MainContainer>
    </>
  );
}