import React from "react";
import { Header, Segment, Image, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainHeader = () => (
  <Segment inverted>
    <Router>
      <Image inverted src="https://i.imgur.com/35UAXn4.png" />
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
  </Segment>
);

export default MainHeader;
