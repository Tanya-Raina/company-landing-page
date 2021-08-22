import React from 'react'
import LineBreak from './LineBreak';
import Footer from "./Footer";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import circleface from '../circleface.jpeg'

function CaseStudy() {
    return (
      <div style={{ backgroundColor: "#1d39a0" }}>
        <br />
        <LineBreak length={"5%"}/>
        <div style={{ width: "45%", margin: "auto", color: "white" }}>
          <h2 style={{letterSpacing: 0.7}}>
            Champions offers a unique platform that allows its users to be
            smarter, faster.
          </h2>
          <p style={{margin: "2em"}}>
            Champions is the best assessment tool available. Champions offers
            fast and flexible self assessment for individuals and organisations.
            This gives users a smart-mover advantage with a broad offering of
            products and services. For business, Champions offers a quick and
            easy way to benchmark an entire workforce and optimise training
            budgets.
          </p>
        </div>

        <Card style={{ width: "30rem", margin: "4em auto 6em" }}>
          <Card.Img
            variant="top"
            src={circleface}
            style={{ width: "15%", alignSelf: "center" }}
          />
          <Card.Body>
            <Card.Text>
              Find out how Tom was able to assess his client's capability
              quickly and easily using the Champions tool.
            </Card.Text>
            <Button variant="outline-primary" style={{padding: "1em 2em", margin: "1%", fontFamily: "'Montserrat', sans-serif"}}>
              Read case study
            </Button>
          </Card.Body>
        </Card>

        <Footer />
      </div>
    );
}

export default CaseStudy
