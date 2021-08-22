import React from 'react'
import LineBreak from './LineBreak'
import manphone from '../manphone.png'

function CallToAction() {
    const iconStyle = {
      fontSize: "2em",
      padding: "1%",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center",
        lineHeight: "2em"
    };
    return (
      <div>
        <img
          src={manphone}
          alt=""
          style={{ width: "30em", float: "left", margin: "50px 15%" }}
        />

        <div style={{ padding: "3.5em 10%", textAlign: "left" }}>
          <LineBreak length={"5%"} />
          <h2>Find out where you're at, no matter where you are</h2>
          <p style={{ padding: "1em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <span style={iconStyle}>
            <i
              className="fab fa-apple"
              style={{
                height: "1em",
                opacity: "0.3",
                marginRight: "1em",
              }}
            ></i>
            <i
              className="fab fa-google-play"
              style={{ fontSize: "0.9em", opacity: "0.3", marginRight: "1em" }}
            ></i>
            <span
              style={{
                color: "#024fba",
                fontSize: "0.7em",
                marginRight: "1.3em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700"
              }}
            >
              Coming soon
            </span>
          </span>
        </div>
      </div>
    );
}

export default CallToAction
