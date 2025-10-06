import { type cartItem } from "../store/cart-slice";
import { Link } from "react-router";
import {
  addToCart,
  removeFromCart,
  deleteItemFromCart,
} from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

import "./CartItem.css";

export default function CartItem({ name, price, image, quantity }: cartItem) {
  const dispatch = useCartDispatch();

  function handleAddItem() {
    dispatch(addToCart({ name, price, image }));
  }
  function removeItem() {
    dispatch(removeFromCart({ name }));
  }
  function handleDeleteItem() {
    dispatch(deleteItemFromCart({ name }));
  }

  return (
    <div className="cart-item">
      {/* Quantity Controls */}
      <div className="cart-item-qty">
        <button onClick={handleAddItem} className="qty-btn">
          +
        </button>
        <button onClick={removeItem} className="qty-btn">
          -
        </button>
      </div>

      {/* Product Image */}
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <Link to={`/product/${name}`}><h3 className="cart-item-name">{name}</h3></Link>
        
        <div>
          <p>quantity: </p>
          <span className="qty-value">{quantity}</span>
        </div>
      </div>

      {/* Price */}
      <div className="cart-item-price">${(price * quantity).toFixed(2)}</div>

      {/* Remove Button */}
      <div className="cart-item-remove">
        <button onClick={handleDeleteItem}>X</button>
      </div>
    </div>
  );
}
