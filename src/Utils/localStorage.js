const getStoredCart = () =>{
  const storedCartString = localStorage.getItem('cart')
  if(storedCartString){
    return JSON.parse(storedCartString)
  }
  return []
}

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))

}
const addToLocalStorage = (id) => {
  const cart = getStoredCart()
  cart.push(id)
  saveCartToLocalStorage(cart)
}

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart()
  const updatedCart = cart.filter(item => item !== id)
  saveCartToLocalStorage(updatedCart)
}

export {addToLocalStorage, getStoredCart, removeFromLocalStorage}