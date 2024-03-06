import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Modal from 'react-modal';
import './Orderstatus.css';

const Orderstatus = () => {
  const [orderStatus, setOrderStatus] = useState('preparing');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateOrderStatus = (status) => {
    setOrderStatus(status);

    if (status === 'delivered') {
      setShowConfetti(true);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setShowConfetti(false);
    setIsModalOpen(false);
  };

  return (
    <div className='orderstatus'>
      <h2>Order Status</h2>

      {/* Status Slide */}
      <div className='status-slide'>
        <div
          className={`status-dot ${orderStatus === 'preparing' && 'active'}`}
          onClick={() => updateOrderStatus('preparing')}
        >
          Food is being prepared
        </div>
        <div
          className={`status-dot ${orderStatus === 'outForDelivery' && 'active'}`}
          onClick={() => updateOrderStatus('outForDelivery')}
        >
          Food out for delivery
        </div>
        <div
          className={`status-dot ${orderStatus === 'delivered' && 'active'}`}
          onClick={() => updateOrderStatus('delivered')}
        >
          Food delivered
        </div>
      </div>

      {/* Slider */}
      <div className='slider-container'>
        <div className='slider-track'></div>
        <div className={`slider-thumb ${orderStatus}`}></div>
      </div>

      {/* Additional content related to order status */}
      <div className='order-details'>
        <p>Estimated delivery time: 30 minutes</p>
        <p>Delivery address: Kozhicode</p>
        {/* Add more details as needed */}
      </div>

      {/* Animation for the order status */}
      {showConfetti && <Confetti />}

      {/* Modal for order delivered */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Order Delivered Modal'
      >
        <h3>Your food has been delivered!</h3>
        <p>Thank you for ordering.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Orderstatus;
