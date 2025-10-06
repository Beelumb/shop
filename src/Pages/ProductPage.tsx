import "./ProductPage.css";
import { Link, useParams } from "react-router-dom";
import { glasses } from "../DUMMY_PRODUCTS"; // Import your products
import { useCartSelector } from "../components/store/hooks";
import { useCartDispatch } from "../components/store/hooks";
import { addToCart, deleteItemFromCart } from "../components/store/cart-slice";

export default function ProductPage() {
  const { productId } = useParams();
  const product = glasses.find((p) => p.name === productId);
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
  const itemExists = cartItems.find((item) => item.name === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  function handleAddToCart(product: {
    name: string;
    price: number;
    image: string;
  }) {
    dispatch(addToCart(product));
  }

  function handleDeleteFromCart(props: { name: string }) {
    dispatch(deleteItemFromCart(props));
  }

  return (
    <div className="productPage-container">
      <Link to="/shop" className="productPage-back-link">
        ← Back to shop
      </Link>
      <div className="productPage-section">
        <div className="productPage-images">
          <img
            src={product.image}
            alt={product.name}
            className="productPage-main-image"
          />
        </div>
        <div className="productPage-details">
          <h4>{product.name}</h4>
          <p>{product.description}</p>

          <div className="productPage-price">${product.price}</div>
          {itemExists ? (
            <button onClick={() => handleDeleteFromCart(product)} className="productPage-removeBtn">Remove from cart</button>
          ) : (
            <button onClick={() => handleAddToCart(product)} className="productPage-btn">add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
