import React from "react";
import { useNavigate } from "react-router-dom";

// ...existing code...

const Cart = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/select-address");
  };

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={handlePlaceOrder}>Place Order</button>
      {/* ...existing code... */}
    </div>
  );
};

export default Cart;
