import ReactDOM from "react-dom";
import "./CartOverlay.css";

const Backdrop = ({ onClose }) => <div className="overlay" onClick={onClose}></div>;

const Modal = ({ candies = [], onClose, onIncrease, onDecrease }) => {
  const totalAmount = candies.reduce(
    (sum, candy) => sum + candy.price * candy.quantity,
    0
  );

  return (
    <div className="overlay-content">
      <h4>Your Cart</h4>

      {candies.length === 0 && <p>No items in cart</p>}

      <ul className="list-group mb-3">
        {candies.map((candy) => (
          <li
            key={candy.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{candy.name}</strong>
              <div className="text-muted">₹ {candy.price}</div>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => onDecrease(candy.id)}>
                −
              </button>
              <span>{candy.quantity}</span>
              <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => onIncrease(candy.id)}>
                +
              </button>
            </div>

            <strong>₹ {candy.price * candy.quantity}</strong>
          </li>
        ))}
      </ul>

      <h5 className="text-end">Total: ₹ {totalAmount}</h5>

      <div className="text-end mt-3">
        <button className="btn btn-secondary me-2" onClick={onClose}>Close</button>
        <button className="btn btn-success">Order</button>
      </div>
    </div>
  );
};

const CartOverlay = ({ cartItems = [], onClose, onIncreseQuentity, onDecreseQuen }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById("overlay-root"))}

      {ReactDOM.createPortal(
        <Modal
          candies={cartItems}
          onClose={onClose}
          onIncrease={onIncreseQuentity}
          onDecrease={onDecreseQuen}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartOverlay;
