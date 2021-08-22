import React from 'react'
import Card from 'react-bootstrap/Card'

function StatCard(props) {
    return (
      <div style={{ width: "10rem", fontFamily: "'Montserrat', sans-serif"}}>
        <Card>
          <Card.Img
            variant="top"
            src={props.imgUrl}
            style={{ width: "70%", alignSelf: "center" }}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
}

export default StatCard
