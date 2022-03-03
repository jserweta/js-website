import "./sass/global.scss";
import React, { useState, useEffect } from "react";
import sanityClient from "./Client";

const App = () => {
  const [siteData, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hero"][0]{
    header,
    image,
    profession
  }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h2>{siteData && siteData.header}</h2>
    </div>
  );
};

export default App;
