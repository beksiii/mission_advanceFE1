import { useState } from "react";
import FormContainer from "../ui/FormContainer";
import FormHeader from "../ui/FormHeader";
import InputField from "./InputField";
import Button from "./Button";
import PasswordToggle from "../ui/PasswordToggle";
import Divider from "../ui/Divider";
import GoogleButton from "../ui/GoogleButton";
import PhoneInput from "./PhoneInput";

export default function RegisterForm({ onSubmit, onLogin, onGoogleRegister }) {
  const [vals, setVals] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errs, setErrs] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const handleChange = (e) =>
    setVals((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrs = {};
    if (!vals.name) newErrs.name = "Nama wajib diisi";
    if (!vals.email) newErrs.email = "Email wajib diisi";
    if (!vals.gender) newErrs.gender = "Jenis kelamin wajib diisi";
    if (!vals.phone) newErrs.phone = "Nomor HP wajib diisi";
    if (!vals.password) newErrs.password = "Password wajib diisi";
    if (vals.password !== vals.confirmPassword)
      newErrs.confirmPassword = "Konfirmasi password tidak sama";
    setErrs(newErrs);
    if (!Object.keys(newErrs).length) onSubmit(vals);
  };

  return (
    <FormContainer>
      <FormHeader
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-4">
            <InputField
              label="Nama Lengkap"
              name="name"
              placeholder="Nama lengkap kamu"
              required
              value={vals.name}
              onChange={handleChange}
              error={errs.name}
            />
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

            {/* Gender */}
            <div className="flex flex-col text-text-dark-secondary">
              <label
                htmlFor="gender"
                className="text-[12px] md:text-[16px] font-sans font-normal leading-myline-2 tracking-myletter-2 text-text-dark-secondary md:w-[110px] md:min-h-7 h-fit pr-4 pb-1 flex gap-1 whitespace-nowrap"
              >
                Jenis Kelamin <span className="text-error-default">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={vals.gender}
                onChange={handleChange}
                required
                className="w-full border text-xs md:text-[16px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 text-text-dark-secondary"
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="wanita">Wanita</option>
                <option value="pria">Pria</option>
              </select>
              {errs.gender && (
                <p className="mt-1 text-sm text-red-600">{errs.gender}</p>
              )}
            </div>

            {/* Phone */}
            <PhoneInput
              label="No. HP"
              name="phone"
              value={vals.phone}
              onChange={handleChange}
              error={errs.phone}
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

            <InputField
              label="Konfirmasi Kata Sandi"
              name="confirmPassword"
              type={showConfirmPwd ? "text" : "password"}
              placeholder="••••••••"
              required
              value={vals.confirmPassword}
              onChange={handleChange}
              error={errs.confirmPassword}
              icon={
                <PasswordToggle
                  visible={showConfirmPwd}
                  onToggle={() => setShowConfirmPwd((v) => !v)}
                />
              }
            />
          </div>

          <Button type="submit" variant="primary">
            Daftar
          </Button>
          <Button type="button" variant="shadow" onClick={onLogin}>
            Masuk
          </Button>

          <Divider />
          <GoogleButton onClick={onGoogleRegister} />
        </div>
      </form>
    </FormContainer>
  );
}
