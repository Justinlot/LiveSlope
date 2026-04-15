import React from "react";
import { createPortal } from "react-dom";
import '../styles/popup.css';

/**
 * Renders content in a modal-style popup overlay.
 */
export default function Popup({ children, onClose }) {
    return createPortal(
        <div className="popup-overlay">
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>,
        document.body
    );
}