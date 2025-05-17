import React from 'react'
import './ImageModal.css'

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imagePath: string;
    altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imagePath, altText }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={imagePath} className="full-modal-image" alt={altText} />
            </div>
        </div>
    );
};

export default ImageModal;