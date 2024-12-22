import Image from "next/image";
import React from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  description: string;
}

const MapModal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageSrc, description }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm">
        <div className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10 relative">
          <button
            className="absolute top-4 right-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
            onClick={onClose}
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

          <header className="text-center">
            <h3 className="text-xl font-medium text-slate-900">{title}</h3>
          </header>
          <div className="w-full flex justify-center">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={300}
              layout="responsive"
              className="rounded-md border-4 border-slate-200"
            />
          </div>
          <div id="content-3a" className="text-center text-sm text-slate-800">
            <p>
              {description}
            </p>
          </div>

        </div>
      </div>
    </ReactModal>
  );
};

export default MapModal;
