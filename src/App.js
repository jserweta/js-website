import "./App.css";
import React from "react";

const App = () => {
  const name = "Jakub Serweta";

  return (
    <div className="App">
      <header className="App-header">
        Hello World! <br />
        Hi {name}
      </header>
    </div>
  );
};

export default App;
