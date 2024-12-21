'use client';
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ModalBasic() {
  const [isShowing, setIsShowing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Show modal on initial page load
  useEffect(() => {
    setIsShowing(true); // Automatically show the modal on page load
  }, []);

  // Close modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle focus trap and prevent scrolling
  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      if (isShowing) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const modal = document.querySelector("#modal");

        if (modal) {
          const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] as HTMLElement;
          const focusableContent = modal.querySelectorAll(focusableElements);
          const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

          const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === "Tab" || e.keyCode === 9) {
              if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                  lastFocusableElement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastFocusableElement) {
                  firstFocusableElement.focus();
                  e.preventDefault();
                }
              }
            }
          };

          const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" || e.keyCode === 27) {
              setIsShowing(false);
            }
          };

          firstFocusableElement?.focus();
          document.addEventListener("keydown", handleTabKey);
          document.addEventListener("keydown", handleEscKey);

          return () => {
            document.removeEventListener("keydown", handleTabKey);
            document.removeEventListener("keydown", handleEscKey);
          };
        }
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      {isShowing &&
        typeof document !== "undefined" &&
        ReactDOM.createPortal(
          <div
            className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
            aria-labelledby="header-3a content-3a"
            aria-modal="true"
            tabIndex={-1}
            role="dialog"
          >
            <div
              ref={wrapperRef}
              className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10 relative"
              id="modal"
              role="document"
            >
              <button
                onClick={() => setIsShowing(false)}
                className="absolute top-4 right-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                aria-label="close dialog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-79 desc-79"
                >
                  <title id="title-79">Close Icon</title>
                  <desc id="desc-79">Close the modal</desc>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <header id="header-3a" className="text-center">
                <h3 className="text-xl font-medium text-slate-900">Welcome to PMSA</h3>
              </header>

              <div className="w-full flex justify-center">
                <Image
                  src="https://github.com/trend-setting/gallery/blob/main/campusiconic.webp?raw=true"
                  alt="Campus Iconic"
                  width={400}
                  height={300}
                  layout="responsive"
                  className="rounded-md border-4 border-slate-200"
                />
              </div>

              <div id="content-3a" className="text-center text-sm text-slate-800">
                <p>
                  Welcome to PMSA CAMPUS: Where curiosity ignites, knowledge blooms, and the future takes flight.
                </p>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://www.instagram.com/wafypmsa_official/"
                  target="_blank"
                  className="text-slate-800"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@munthajulafnanstudentsasso6980?si=x3m_nrILHgMRXz9s"
                  target="_blank"
                  className="text-slate-800"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://www.facebook.com/pmsawafy"
                  target="_blank"
                  className="text-slate-800"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
