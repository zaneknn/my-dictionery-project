import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logoBar">
        <img src={logo} alt="My Image" className="logo" />
        <span>Dictionary</span>
      </div>
    </div>
  );
}

export default App;
