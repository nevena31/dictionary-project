import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was built by{" "}
            <a
              href="https://www.shecodes.io/graduates/66794-nevena-ivastanin"
              target="_blank"
              rel="noreferrer"
            >
              Nevena Ivaštanin
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/nevena31/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://nevdev-dictionary-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
