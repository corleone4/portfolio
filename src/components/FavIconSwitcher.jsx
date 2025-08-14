import { useEffect } from "react";
import faviconLight from "../assets/white_favicon.ico";
import faviconDark from "../assets/favicon.ico";

export default function FaviconSwitcher() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const setFavicon = (isDark) => {
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "icon";
      link.href = isDark ? faviconLight : faviconDark;
      document.head.appendChild(link);
    };

    setFavicon(media.matches);

    const handler = (e) => setFavicon(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return null;
}
