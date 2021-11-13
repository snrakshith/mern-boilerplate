import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          height: "300px",
          width: "100%"
        }}
      >
        <h1>capdice</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "blue",
            color: "white",
            width: "8%",
            marginTop: "1%"
          }}
        >
          <div>
            <a href="https://www.facebook.com/capdice" target="_blank">
              <i
                class="fa fa-facebook-official fa-3x"
                aria-hidden="true"
                style={{ color: "white" }}
              />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/company/capdice/" target="_blank">
              <i
                class="fa fa-linkedin-square fa-3x"
                aria-hidden="true"
                style={{ color: "white" }}
              />
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            // backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.5%",
            width: "100%"
          }}
        >
          <p>Copyright @ 2019 CAPDICE LLP. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    );
  }
}

export default Footer;
