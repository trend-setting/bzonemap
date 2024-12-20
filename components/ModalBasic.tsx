'use client';
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

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
              className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
              id="modal"
              role="document"
            >
              <header id="header-3a" className="flex items-center gap-4">
                <h3 className="flex-1 text-xl font-medium text-slate-700">Terms and Conditions</h3>
                <button
                  onClick={() => setIsShowing(false)}
                  className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none"
                  aria-label="close dialog"
                >
                  <span className="relative only:-mx-5">
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
                  </span>
                </button>
              </header>
              <div id="content-3a" className="flex-1 overflow-auto">
                <p>
                  A Terms and Conditions agreement is where you let the public know the terms, rules, and
                  guidelines for using your website or mobile app. They include topics such as acceptable use,
                  restricted behavior, and limitations of liability.
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
