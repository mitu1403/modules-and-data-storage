
function Cart({ cart, handleRemoveItem, handleAddItem }) {
  console.log(cart)
  return (
    <div>
      <p>Cart: {cart.length ? cart.length : "Your Cart is Empty"}</p>
      {cart.map((item, index) => (
        <div key={index} className="cart-count">
          <img src={item.picture} className="cart-image"/>
          <button onClick={() => handleRemoveItem(item.id)}>remove</button> 
          <p>{item.quantity ? item.quantity : 1}</p>         
          <button onClick={() => handleAddItem(item.id)}>add</button>          
        </div>
      ))}
    </div>
  );
}
export default Cart;
