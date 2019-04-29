import React from "react";
import { Image, Segment, Header, Container, Grid } from "semantic-ui-react";

const OurValuedClients = () => (
  <div>
    <Segment
      style={{
        padding: "5em 0em"
      }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Header
            as="h3"
            style={{
              fontSize: "2em"
            }}
          >
            Our Mission
          </Header>
          <p
            style={{
              fontSize: "1.33em"
            }}
          >
            At Gurlabe.com, our mission is to break the barrier for businesses
            and inidividuals who deserve the exposure that the internet can
            provide. We here at Gurlabe.com aknowledge the large amount of small
            businesses owners and enthusiats who believe owning their own
            websites and being relevant on Search Platforms is highly expensive
            and unobtainable. Our long-term goal is to change those beliefs and
            offer an affordable and easy way to bring your passion to the
            next-level of exposure.
          </p>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{
        padding: "0em"
      }}
      vertical
    >
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em"
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em"
              }}
            >
              <h1>Our Clientele</h1>
              <Image src="http://i67.tinypic.com/2dkjuaa.png" />
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{
        padding: "2em 0em"
      }}
      vertical
    >
      <Container text>
        <Header
          as="h3"
          style={{
            fontSize: "2em"
          }}
        >
          Get your free consultation today!
        </Header>
        <p
          style={{
            fontSize: "1.33em"
          }}
          fluid
        >
          Gurlabe.com would love to hear about your business/passion! Give us a
          call today!
        </p>
        You may reach out to us at (559) 908-8746 any day of the week from the
        Hours of 9:00AM - 8:00PM
      </Container>
    </Segment>
  </div>
);

export default OurValuedClients;
