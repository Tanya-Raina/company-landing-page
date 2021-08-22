import React from 'react'
import LineBreak from './LineBreak'
import MyNavBar2 from './MyNavBar2'
import arrow from '../arrow.png'

function Footer() {
    const iconStyles = {
        margin: "2%"
    }
    return (
      <div style={{ color: "white" }}>
        <div style={{ opacity: "0.7" }}>
          <LineBreak length={"70%"} />
        </div>

        <a href="#home">
          <img
            style={{ float: "right", width: "6em", marginRight: "1%" }}
            src={arrow}
            alt=""
          />
        </a>

        <div style={{ textAlign: "center" }}>
          <MyNavBar2 />
        </div>

        <span style={{ margin: "5%", opacity: "0.5" }}>
          <i style={iconStyles} class="fab fa-facebook-f"></i>
          <i style={iconStyles} class="fab fa-twitter"></i>
          <i style={iconStyles} class="fab fa-linkedin-in"></i>
          <i style={iconStyles} class="fab fa-youtube"></i>
        </span>

        <p style={{ opacity: "0.5" }}>
          ⓒ 2019 Powered by CEG Gloabal Pvt Ltd. All rights reserved.
        </p>
      </div>
    );
}

export default Footer
