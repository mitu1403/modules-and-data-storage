
function Cart({ cart, handleRemoveItem }) {
  return (
    <div>
      <p>Cart: {cart.length ? cart.length : "Your Cart is Empty"}</p>
      {cart.map((item, index) => (
        <div key={index} className="cart-count">
          <img src={item.picture} className="cart-image"/>
          <button onClick={() => handleRemoveItem(item.id)}>remove</button>          
        </div>
      ))}
    </div>
  );
}
export default Cart;
