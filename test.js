import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const name = "리액트";
  return (
    <div className="App-header">
      <div className="container App">
        <div className="row">
          <div className="col-md-6">
            {name === "리액트" ? <h1>Hello</h1> : <h1>Bye</h1>}
          </div>
          <div className="col-md-6">
            <h1>{name}</h1>
          </div>
          <div className="col-md-12">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
