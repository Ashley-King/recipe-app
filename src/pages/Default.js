import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppcase">Ain't nothin' to see here.</h2>
        <Link to="/" className="test-uppercase btn btn-secondary btn-lg mt-3">
          Go Back To The Recipes
        </Link>
      </Header>
    );
  }
}
