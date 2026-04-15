import React from "react";
import { createPortal } from "react-dom";
import '../styles/popup.css';

export default function Popup({ children, onClose }) {
    /**
     * Component for displaying a popup message
     */

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