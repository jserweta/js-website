import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import React from "react";
import AboutMe from "./components/about-me/AboutMe";
import NavProvider from "./context/NavContext";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./sass/_normalize.scss";
import "./sass/global.scss";
import "./sass/_app.scss";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div className="App">
      <NavProvider>
        <NavBar />
        <main className="mainContent">
          <Home />
          <AboutMe />
          <Resume />
          <Contact />
          <div className="overflow"></div>
        </main>
      </NavProvider>
      <Footer/>
    </div>
  );
};

export default App;
