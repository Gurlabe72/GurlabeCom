import React, { Component } from "react";

import MainHeader from "../components/Header";
import OurValuedClients from "../components/Body";
import Navigation from "../components/Navbar";
import { Segment } from "semantic-ui-react";
import Footer from "../components/Footer";
import "semantic-ui-css/semantic.min.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MainHeader />
        <OurValuedClients />
        <Segment>
          <Footer />
        </Segment>
      </div>
    );
  }
}

export default HomePage;
