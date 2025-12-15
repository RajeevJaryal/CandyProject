import React, { useState } from "react";

const CandyEntryForm = ({ onAddCandy }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      alert("Please fill all fields!");
      return;
    }

    // Create candy object
    const newCandy = {
      id: Date.now(), // unique id
      name,
      description,
      price: parseFloat(price), // ensure number
    };

    onAddCandy(newCandy);

    // Reset form
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form className="container mt-4" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Candy Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Candy
      </button>
    </form>
  );
};

export default CandyEntryForm;
