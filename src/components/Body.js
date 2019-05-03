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
            provide. We here at Gurlabe.com aknowledge the large amount of
            enthusiats and small business owners who believe owning their own
            website is highly expensive and/or unobtainable. Our long-term goal
            is to change those beliefs and offer an affordable and easy way to
            bring your passion to the next-level.
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
      <Container>
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
                Our Clientele
              </Header>
              <Image src="http://i67.tinypic.com/2dkjuaa.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment
      style={{
        padding: "2em 0em"
      }}
      vertical
    >
      <Container>
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
        >
          Gurlabe.com would love to hear about your business/passion! Give us a
          call today!
          <br />
          You may reach out to us at (559) 908-8746 any day of the week from the
          Hours of 9:00AM - 8:00PM
        </p>
      </Container>
    </Segment>
  </div>
);

export default OurValuedClients;
