import React from "react";

import "./App.css";
import MainHeader from "./components/Header";
import OurValuedClients from "./components/Body";
import Navigation from "./components/Navbar";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Container>
      <Navigation />
      <MainHeader />
      <OurValuedClients />
      <Footer />
    </Container>
  );
}

export default App;
