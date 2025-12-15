import React from "react";

const CandiesButtons = ({ candy, onAddToCart }) => {
  return (
    <div className="d-flex gap-2">
      <button className="btn bg-primary text-white" onClick={() => onAddToCart(candy, 1)}>
        Buy 1
      </button>
      <button className="btn bg-primary text-white" onClick={() => onAddToCart(candy, 2)}>
        Buy 2
      </button>
      <button className="btn bg-primary text-white" onClick={() => onAddToCart(candy, 3)}>
        Buy 3
      </button>
    </div>
  );
};

export default CandiesButtons;
