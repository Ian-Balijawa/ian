import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<"small" | "medium" | "large">(
    "small"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenWidth("small");
      } else if (width >= 768 && width < 1024) {
        setScreenWidth("medium");
      } else if (width >= 1024) {
        setScreenWidth("large");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};
