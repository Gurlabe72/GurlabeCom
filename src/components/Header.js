import React from "react";
import { Header, Segment, Image, Button } from "semantic-ui-react";

const MainHeader = () => (
  <Segment inverted>
    <Image inverted src="https://i.imgur.com/35UAXn4.png" />
    <Header
      as="h2"
      inverted
      style={{
        fontWeight: "normal",
        marginBottom: 0
      }}
    />
    <Button basic color="blue" fluid>
      Contact Us
    </Button>
  </Segment>
);

export default MainHeader;
