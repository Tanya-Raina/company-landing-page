import React from 'react';
import MyNavBar from "../components/MyNavBar";
import TextSection from "../components/TextSection"

function TopSection() {
    return (
      <div style={{ backgroundColor: "#024fba", color: "white", fontFamily: "'Montserrat', sans-serif"}}>
        <MyNavBar />
        <TextSection />
      </div>
    );
}

export default TopSection;

