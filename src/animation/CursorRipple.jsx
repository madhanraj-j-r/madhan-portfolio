import React, { useEffect } from "react";
import "./CursorRipple.css";

const CursorRipple = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      // remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleClick);
    return () => window.removeEventListener("mousemove", handleClick);
  }, []);

  return null;
};

export default CursorRipple;
