import React from 'react'
import Button from "react-bootstrap/Button";
import circledesign from "../circledsign.png"

function TextSection() {
    return (
      <div>
        <img
          src={circledesign}
          alt=""
          style={{ width: "350px", float: "right", margin: "50px 15%" }}
        />
        <div style={{ padding: "100px 15%", textAlign: "left" }}>
          <h1 style={{ letterSpacing: "3px" }}>
            Assess everything. Find your strengths & weaknesses.
          </h1>
          <p style={{ padding: "10px 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="light"
            size="lg"
            style={{ color: "#024fba", marginRight: "20px" }}
          >
            Find out more
          </Button>{" "}
          <Button
            variant="outline-primary"
            size="lg"
            style={{ color: "white", borderColor: "white" }}
          >
            Test your skills
          </Button>{" "}
        </div>
      </div>
    );
}

export default TextSection
