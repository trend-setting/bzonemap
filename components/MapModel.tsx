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
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-hidden relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <img src={imageSrc} alt={title} className="w-full rounded-lg mb-4" />
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default MapModal;
