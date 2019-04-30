import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Segment inverted>
          <Menu inverted>
            <Link as="a" to="/">
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link as="a" to="/ContactPage">
              <Menu.Item
                name="Contact Us"
                active={activeItem === "Contact Us"}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>
        </Segment>
      </Router>
    );
  }
}
