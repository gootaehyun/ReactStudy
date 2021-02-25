import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <h1>
          Hello, My name is {name}
          <br />
          children is {children}
          <br />
          My favorite number is {favoriteNumber}
          <br />
          Thank you
        </h1>
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "basic",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
