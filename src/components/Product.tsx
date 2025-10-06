import React from "react";
import { type Glasses } from "../DUMMY_PRODUCTS";
import { addToCart, deleteItemFromCart } from "./store/cart-slice";
import { useCartSelector, useCartDispatch } from "./store/hooks";
import { Link } from "react-router";

type ProductProps = {
  key: string;
} & Glasses;

const Product: React.FC<ProductProps> = ({ ...props }) => {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const itemExists = cartItems.find((item) => item.name === props.name);

  function handleAddToCart(props: {
    name: string;
    price: number;
    image: string;
  }) {
    dispatch(addToCart(props));
  }

  function handleDeleteFromCart(props: { name: string }) {
    dispatch(deleteItemFromCart(props));
  }

  let productCardClass: string = "product-card";
  if (itemExists) {
    productCardClass = "product-card active";
  }

  return (
    <li className={productCardClass}>
      {itemExists && (
        <div className="product-check">
          <i className="bi bi-check2"></i>
        </div>
      )}
      <div className="product-content">
        <Link to={`/product/${props.name}`}>
          <img src={props.image} alt={props.name} className="product-img" />
          <h3 className="product-name">{props.name}</h3>
          <p className="product-price">${props.price}</p>
        </Link>
      </div>
      {itemExists ? (
        <button className="active" onClick={() => handleDeleteFromCart(props)}>
          Remove from cart
        </button>
      ) : (
        <button onClick={() => handleAddToCart(props)}>Add to Cart</button>
      )}
    </li>
  );
};
export default Product;
