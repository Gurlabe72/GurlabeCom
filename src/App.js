import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/ContactPage" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
