import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch request and redirection logic here
  }, [navigate]);

  return (
    <div>
      {/* Your payment failure UI goes here */}
      <h1>Payment Failed</h1>
      <p>Sorry, there was an issue with your payment.</p>
    </div>
  );
};

export default PaymentFailure;
