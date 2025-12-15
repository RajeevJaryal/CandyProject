import React, { useState } from "react";
import CandyEntryForm from "../Body/CandyEntryForm";
import ShowCandies from "./ShowCandies";
import HeaderSection from "../header/HeaderSection";

const Candies = () => {
  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addCandyHandler = (candy) => {
    setCandies((prev) => [...prev, candy]);
  };

  const addToCartHandler = (candy, qty = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === candy.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === candy.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [...prevItems, { ...candy, quantity: qty }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <HeaderSection
        cartItems={cartItems}
        onIncreseQuentity={increaseQty}
        onDecreseQuen={decreaseQty}
      />

      <CandyEntryForm onAddCandy={addCandyHandler} />

      <ShowCandies candies={candies} onAddToCart={addToCartHandler} />
    </>
  );
};

export default Candies;
