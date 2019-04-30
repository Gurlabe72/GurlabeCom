import React, { Component } from "react";
import MainHeader from "./Header";
import Navigation from "./Navbar";
import Footer from "./Footer";
import { Segment, Container, Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class ContactPage extends Component {
  render() {
    return (
      <Container>
        <Segment inverted>
          <Navigation />
          <MainHeader />
        </Segment>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                placeholder="First Name, Last Name"
              />
              <Form.Input
                fluid
                label="Name of Business or Brand"
                placeholder="Tell us the name of your business"
              />
              <Form.TextBox
                fluid
                label="Tell us a little about your business"
              />
            </Form.Group>
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button type="submit">Submit</Button>
          </Form>
          <Footer />
        </Segment>
      </Container>
    );
  }
}

export default ContactPage;
