import React from "react";
import CandiesButtons from "./CandiesButtons";

const ShowCandies = ({ candies, onAddToCart }) => {
  if (candies.length === 0) {
    return <p className="text-center text-muted mt-4">No candies added yet 🍬</p>;
  }

  return (
    <div className="container mt-4">
      {candies.map((candy) => (
        <div
          key={candy.id}
          className="card mb-3 p-3 shadow-sm d-flex flex-row justify-content-between align-items-center"
          style={{
            boxShadow:
              "0 -4px 8px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div>
            <h5 className="mb-1">{candy.name}</h5>
            <p className="mb-1 text-muted">{candy.description}</p>
            <strong>₹ {candy.price}</strong>
          </div>

          <CandiesButtons candy={candy} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ShowCandies;
