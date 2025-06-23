import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const themeUtils = () => {
  const location = useLocation();

  useEffect(() => {
    const isBlogPost = location.pathname.startsWith("/blog/");
    if (!isBlogPost) {
      document.documentElement.style.setProperty("--main-color", "#FFCCCB");
      document.body.classList.remove("custom-theme");
    }
  }, [location.pathname]);
};

export default themeUtils;
