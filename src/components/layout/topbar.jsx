import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Topbar({ onHeightChange }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  // Show only at top of page and if not manually closed
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 0;
      setIsVisible(atTop && !isManuallyClosed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManuallyClosed]);

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(isVisible ? 48 : 0);
    }
  }, [isVisible, onHeightChange]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-white via-[#b2f0e9] text-black px-4 py-2 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center text-center">
        <p className="text-[12px] sm:text-sm md:text-base leading-tight max-w-full px-6">
          ⚠️ Beware of crypto recovery scammers!{" "}
          <a href="#" className="underline font-semibold">
            Learn more
          </a>{" "}
          ⚠️
        </p>
        <button
          onClick={() => {
            setIsManuallyClosed(true);
            setIsVisible(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm sm:text-base"
          aria-label="Close topbar"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}
