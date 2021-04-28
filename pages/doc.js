import React, { Component } from "react";
import Router from "next/router";

export default class Doc extends Component {
  componentDidMount = () => {
    Router.push("/index");
  };

  render() {
    return <div />;
  }
}