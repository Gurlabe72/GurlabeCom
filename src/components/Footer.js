import React, { Component } from "react";
import { Container, Segment, Grid, List, Header } from "semantic-ui-react";
import { BrowserRouter, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

export default class Footer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Segment
          inverted
          vertical
          style={{
            padding: "5em 0em"
          }}
        >
          <Container>
            <Grid divided inverted>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <Link to="/">
                      <List.Item as="a"> Home </List.Item>
                    </Link>
                    <br />
                    <Link>
                      <List.Item as="a">Contact Us</List.Item>
                    </Link>

                    <List.Item as="a"> FAQ </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header inverted as="h4" content="Services" />
                  <Header as="h4" inverted>
                    GurlabeSingh@gmail.com
                  </Header>
                  <p> (559)908-8746 </p>
                  <Header as="h4">
                    © 2019 Gurlabe.com All Rights Reserved.
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </BrowserRouter>
    );
  }
}
