import React, { Component } from "react";
import Banner from "./Banner";
import About from "./About"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <About />
      </div>
    );
  }
}
