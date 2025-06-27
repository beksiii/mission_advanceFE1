// src/components/ui/PasswordToggle.jsx
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function PasswordToggle({ visible, onToggle }) {
  return visible ? (
    <EyeOffIcon size={20} onClick={onToggle} className="cursor-pointer" />
  ) : (
    <EyeIcon size={20} onClick={onToggle} className="cursor-pointer" />
  );
}
