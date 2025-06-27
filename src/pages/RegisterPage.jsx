import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/form/RegisterForm";
import MainContainer from "../components/layout/MainContainer";
import Navbar from "../components/layout/Navbar";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // Lakukan submit ke backend atau validasi lanjutan
    console.log("Register data:", data);
    // Misalnya langsung redirect ke login
    navigate("/login");
  };

  const handleGoogleRegister = () => {
    console.log("Daftar dengan Google");
    // Tambahkan logika Google Auth di sini
  };

  return (
      <>
      <Navbar />
            <MainContainer>  <RegisterForm
        onSubmit={handleRegister}
        onLogin={() => navigate("/login")}
        onGoogleRegister={handleGoogleRegister}
      />
      </MainContainer>
    </>
  );
}
