import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch";

function App() {
  // this is called using data locally or in memory option
  // const watches = [
  //   { id: 1, model: "Apple Watch Series 9", price: 399 },
  //   { id: 2, model: "Galaxy Watch 6", price: 299 },
  //   { id: 3, model: "Fitbit Versa 4", price: 229 },
  //   { id: 4, model: "Garmin Forerunner 265", price: 449 },
  //   { id: 5, model: "Amazfit GTR 4", price: 199 },
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((response) => response.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      {watches.map((item) => (
        <Watch key={item.id} watch={item} />
      ))}
    </>
  );
}

export default App;
