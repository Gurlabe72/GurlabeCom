import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, Button, Image, Divider, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container text>
          <Image centered src="https://i.imgur.com/GjdKmkA.jpg" />
        </Container>
        <Divider />
        <Form>
          <Form.Field>
            <label>Full Name</label>
            <input placeholder="Enter your name here" />
          </Form.Field>
          <Form.Field>
            <label>Name of your brand/business/hobby</label>
            <input placeholder="Please enter here" />
          </Form.Field>
          {/* <Form.Field>
            <TextArea>
              <label>
                In a few words, please describe what your business/brand/hobby
                does{" "}
              </label>
              <input placeholder="Please enter here" />
            </TextArea>
          </Form.Field> */}
          <Button type="submit">Submit</Button>
        </Form>
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
