import React from 'react'
import Card from 'react-bootstrap/Card'

function MyCard(props) {
    return (
      <div>
        <Card style={{ width: "15rem", height: "18rem", margin: "0 0.5em", 
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
          }}>
          <Card.Img
            variant="top"
            style={{ width: "50%", alignSelf: "center" }}
            src={props.imgUrl}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default MyCard
