import React, { Component } from "react";

import MainHeader from "./Header";
import OurValuedClients from "./Body";
import Navigation from "./Navbar";

import { Segment } from "semantic-ui-react";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";

class HomePage extends Component {
  render() {
    return (
      <Segment>
        <Navigation />
        <MainHeader />
        <OurValuedClients />
        <Footer />
      </Segment>
    );
  }
}

export default HomePage;
