import React from "react";
import { Header, Icon, Segment, Image, Button } from "semantic-ui-react";

const MainHeader = () => (
  <Segment inverted>
    <Image inverted src="https://i.imgur.com/35UAXn4.png" />
    <Header
      as="h2"
      content="To excel in comprehensive and integrated care and activities for youth and their families."
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
