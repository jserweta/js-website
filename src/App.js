import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import React from "react";
import AboutMe from "./components/about-me/AboutMe";
import NavProvider from "./context/NavContext";
import "./sass/_normalize.scss";
import "./sass/global.scss";
import "./sass/_app.scss";
import Resume from "./components/resume/Resume";

const App = () => {
  return (
    <div className="App">
      <NavProvider>
        <NavBar />
        <main className="mainContent">
          <Home />
          <AboutMe />
          <Resume />
          <div className="overflow"></div>
        </main>
      </NavProvider>
    </div>
  );
};

export default App;
