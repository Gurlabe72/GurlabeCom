import React from "react";

import "./App.css";
import MainHeader from "./components/Header";
import OurValuedClients from "./components/Body";
import Navigation from "./components/Navbar";
import { Segment, Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Container>
      <Segment inverted>
        <Navigation />
        <MainHeader />
      </Segment>
      <Segment inverted>
        <OurValuedClients />
        <Footer />
      </Segment>
    </Container>
  );
}

export default App;
