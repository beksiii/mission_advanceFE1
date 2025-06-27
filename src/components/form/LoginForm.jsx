// src/components/form/LoginForm.jsx
import { useState } from "react";
import FormContainer from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import InputField from "./InputField";
import Button from "./Button";
import PasswordToggle from "../ui/PasswordToggle";
import Divider from "../ui/Divider";
import GoogleButton from "../ui/GoogleButton";

export default function LoginForm({
  onSubmit,
  onRegister,
  onForgotPassword,
  onGoogleLogin,
}) {
  const [vals, setVals] = useState({ email: "", password: "" });
  const [errs, setErrs] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  const handleChange = (e) =>
    setVals((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrs = {};
    if (!vals.email) newErrs.email = "Email wajib diisi";
    if (!vals.password) newErrs.password = "Password wajib diisi";
    setErrs(newErrs);
    if (!Object.keys(newErrs).length) onSubmit(vals);
  };

  return (
    <FormContainer>
      <FormHeader
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutkan belajar di videobelajar."
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-4">
            <InputField
              label="E-Mail"
              name="email"
              type="email"
              placeholder="contoh@domain.com"
              required
              value={vals.email}
              onChange={handleChange}
              error={errs.email}
            />

            <InputField
              label="Kata Sandi"
              name="password"
              type={showPwd ? "text" : "password"}
              placeholder="••••••••"
              required
              value={vals.password}
              onChange={handleChange}
              error={errs.password}
              icon={
                <PasswordToggle
                  visible={showPwd}
                  onToggle={() => setShowPwd((v) => !v)}
                />
              }
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="font-dm-sans text-center text-text-dark-secondary font-medium text-xs md:text-[16px] leading-myline-2 tracking-myletter-2"
            >
              Lupa Password?
            </button>
          </div>
          <Button type="submit" variant="primary" onClick={onSubmit}>
            Masuk
          </Button>
          <Button type="button" variant="shadow" onClick={onRegister}>
            Daftar
          </Button>
          <Divider />
          <GoogleButton onClick={onGoogleLogin} />
        </div>
      </form>
    </FormContainer>
  );
}
