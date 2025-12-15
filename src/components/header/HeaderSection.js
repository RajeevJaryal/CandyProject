import React, { useState } from "react";
import HeaderCart from "./HeaderCart";
import CartOverlay from "../../UI/CartOverlay";

const HeaderSection = ({ cartItems, onIncreseQuentity, onDecreseQuen }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header
        className="d-flex bg-primary justify-content-between align-items-center text-white"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "5rem",
          padding: "0 10%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          zIndex: 10,
        }}
      >
        <h3 className="mb-0 fw-bold">ReactCandies</h3>

        <HeaderCart
          onOpenCart={() => setShowCart(true)}
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        />
      </header>

      {showCart && (
        <CartOverlay
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onIncreseQuentity={onIncreseQuentity}
          onDecreseQuen={onDecreseQuen}
        />
      )}
    </>
  );
};

export default HeaderSection;
