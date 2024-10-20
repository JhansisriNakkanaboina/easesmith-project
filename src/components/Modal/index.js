import React from 'react';
import './index.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button> {/* Close button */}
        <h3>Your Cart</h3>
        <hr />
        <h1>Congratulations! Order Placed!</h1>
        <img src="/images/NewPlant.png" alt="New Plant" />
        <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
        <button className="continue-shopping" onClick={onClose}>CONTINUE SHOPPING</button>
      </div>
    </div>
  );
};

export default Modal;
