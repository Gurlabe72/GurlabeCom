import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navigation extends Component {
  state = { activeItem: "home" };

  render() {
    return (
      <Router>
        <Segment inverted>
          <Menu inverted>
            <Link to="/">
              <Menu.Item name="home" />
            </Link>

            <Link to="/ContactPage">
              <Menu.Item name="Contact Us" />
            </Link>
          </Menu>
        </Segment>
      </Router>
    );
  }
}
