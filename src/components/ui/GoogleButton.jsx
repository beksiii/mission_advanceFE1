// src/components/ui/GoogleButton.jsx
import Button from "../form/Button";

export default function GoogleButton({ onClick }) {
  return (
    <Button variant="outline" onClick={onClick}>
      <img
        src="/logoGoogle.png"
        className="inline-block w-5 h-5 md:w-7 md:h-7 align-text-top"
      />
      Masuk dengan Google
    </Button>
  );
}
