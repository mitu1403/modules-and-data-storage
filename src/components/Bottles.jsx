import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./bottle.scss";

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  const handleCartCount = (bottle) => {
    console.log(bottle);
    if (!cart.includes(bottle)) {
      setCart([...cart, bottle]);
    }
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <p>Cart: {cart.length}</p>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.brand}
            bottle={bottle}
            handleCartCount={handleCartCount}
          />
        ))}
      </div>
    </div>
  );
}
export default Bottles;
