import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import "./bottle.scss";
import {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../Utils/localStorage";

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const cartItems = [];
      for (const id of storedCart) {
        const cartId = bottles.find((item) => item.id === id);
        if (cartId) {
          cartItems.push(cartId);
        }
      }
      setCart(cartItems);
    }
  }, [bottles]);

  const handleCartCount = (bottle) => {
    setCart([...cart, bottle]);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveItem = (id) => {
    removeFromLocalStorage(id);
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
  };
  const handleAddItem = (id) => {
    addToLocalStorage(id);
    const storedCart = getStoredCart();
    const cartItems = [];
    for (const id of storedCart) {
      const cartId = bottles.find((item) => item.id === id);
      if (cartId) {
        cartItems.push(cartId);
      }
    }
    setCart(cartItems);
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <div className="info-container">
        <div className="bottle-container">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.brand}
              bottle={bottle}
              handleCartCount={handleCartCount}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart
            cart={cart}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
        </div>
      </div>
    </div>
  );
}
export default Bottles;
