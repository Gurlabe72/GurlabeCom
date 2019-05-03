import React from "react";
import { Header, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainHeader = () => (
  <Router>
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
      <Button color="blue" fluid>
        Contact Us
      </Button>
    </Link>
  </Router>
);

export default MainHeader;
