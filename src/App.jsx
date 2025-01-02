import Bottles from "./components/Bottles";
import './App.scss'

function App() {
  return (
    <div className="container">
      <h1>The Best Reusable Water Bottles That Are not Stanley Cups</h1>
      <p>
        Stay hydrated in style and cut down on single-use plastic with our
        favorite bottles—now updated with information on lead.
      </p>
      <Bottles/>
    </div>
  );
}

export default App;
