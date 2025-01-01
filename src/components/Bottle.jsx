function Bottle({bottle, handleCartCount}) {
  const {brand, picture, price} = bottle 
  return (
    <div className="bottles">
      <img src={picture}/>
      <p>Bottle Brand: {brand}</p>
      <small>Price: {price}</small>
      <button onClick={()=>handleCartCount(bottle)}>Add to Cart</button>
    </div>
  )
}
export default Bottle