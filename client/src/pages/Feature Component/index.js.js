import React, { Component } from "react";
import Goals from "./components/Goals";
import WhoAreWe from "./components/WhoAreWe";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "100%", margin: "0% 15%" }}>
        <div style={{ marginTop: "5%" }}>
          <Goals />
        </div>
        <div style={{ marginTop: "5%" }}>
          <WhoAreWe />
        </div>
      </div>
    );
  }
}

export default AboutUs;
