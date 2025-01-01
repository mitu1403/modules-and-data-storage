import { adding, multiply, divide as bhaag } from "../Utils/Calculate";
function Watch({watch}) {
  
  const {id, model, price} = watch
  const sum = adding(20, 30);
  const gun = multiply(20, 30);
  const bhag = bhaag(sum, gun);
  return (
    <div>
      {/* <p>{sum}</p>
      <p>{gun}</p>
      <p>{bhag}</p> */}
      <p>Model Name: {model}</p>
      <small>Price: {price}</small>
    </div>
  );
}
export default Watch;
