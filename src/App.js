import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/Header";

import MenuExamplePointing from "./components/Navbar";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <MenuExamplePointing />
      <MainHeader />
    </div>
  );
}

export default App;
