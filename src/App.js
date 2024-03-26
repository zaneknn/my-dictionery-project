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
        <footer className="App-footer">
          Coded by <a href="https://github.com/zaneknn">Zane Jakuseva</a> and is
          open-sourced on{" "}
          <a href="https://github.com/zaneknn/my-dictionery-project">Github</a>{" "}
          📚
        </footer>
      </div>
    </div>
  );
}

export default App;
