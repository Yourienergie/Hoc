import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

const Hoc = (Component) => {
  return props => {
    return props.verify ? (
      <Component {...props} />
    ) : (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  };
};

export default Hoc;
