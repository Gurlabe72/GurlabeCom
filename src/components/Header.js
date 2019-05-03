import React from "react";
import { Header, Image, Button, Container } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainHeader = () => (
  <Router>
    <Container text textAlign="center">
      <Image centered src="https://i.imgur.com/GjdKmkA.jpg" />
      <Header
        as="h2"
        inverted
        style={{
          fontWeight: "normal",
          marginBottom: 0
        }}
      />
      <Link as="a" to="/ContactPage">
        <Button fluid color="teal">
          Contact Us
        </Button>
      </Link>
    </Container>
  </Router>
);

export default MainHeader;
