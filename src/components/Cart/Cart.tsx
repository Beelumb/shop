import { useCartSelector, useCartDispatch } from "../store/hooks";
import { clearCart } from "../store/cart-slice";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Cart.css"; // custom CSS
import CartItem from "./CartItem";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();
 const totalPrice = cartItems.reduce((val , item) => val + item.price * item.quantity , 0)

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="cart-container">
      {/* Open Button */}
      <button onClick={() => setIsOpen(true)} className="cart-open-btn">
        <i className="bi bi-cart"></i>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="cart-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Modal */}
            <motion.div
              className="cart-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="cart-header">
                <div>
                  <h4>
                    My basket <span> ( {cartItems.length} items )</span>
                  </h4>
                </div>

                <div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cart-close-btn"
                  >
                    Close
                  </button>
                  <button className="cart-close-btn" onClick={handleClearCart}>
                    Clear Basket
                  </button>
                </div>
              </div>

              <div className="cart-main">
                {cartItems.map((item) => (<CartItem key={item.name} {...item}/>))}
              </div>

              <div className="cart-footer">
                <div>Total Price: <span>${totalPrice.toFixed(2)}</span></div>
                <div>
                  <button>Check Out</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
