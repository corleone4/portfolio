import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import white_logo from "../assets/white_logo.png";

export default function Logo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);

    const handler = (e) => setIsDark(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <img
      src={isDark ? white_logo : logo }
      alt="Logo"
      className="h-12 w-auto"
    />
  );
}
