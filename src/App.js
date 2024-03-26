import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="logoBar">
          <img src={logo} alt="logo" className="logo" />
          <span>Dictionary</span>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">Coded by Zane Jakuseva 📚</footer>
      </div>
    </div>
  );
}

export default App;
