import React from "react";
import HeaderCartIcon from "./HeaderCartIcon";

const HeaderCart = ({ onOpenCart, cartCount }) => {
  return (
    <button
      className="btn text-white d-flex align-items-center fw-bold"
      style={{
        padding: "0.75rem 2.5rem",
        borderRadius: "25px",
        backgroundColor: "#0b5ed7",
        border: "none",
        gap: "10px"
      }}
      onClick={onOpenCart}
    >
      <span style={{ width: "1.35rem", height: "1.35rem" }}>
        <HeaderCartIcon />
      </span>

      <span>Your Cart</span>
      <span className="badge bg-danger rounded-pill">
        {cartCount}
      </span>
    </button>
  );
};

export default HeaderCart;
