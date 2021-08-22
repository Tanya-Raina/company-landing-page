import React from 'react'
import MyCard from "../components/MyCard";
import assess from '../assess.jpeg'
import engage from '../engage.jpeg'
import target from '../target.jpeg'
import report from '../report.jpeg'

function CardSection() {
    const cardDetails = [
      {
        id: 1,
        imgUrl: assess,
        title: "Assess",
        text: "Test yourself or anyone on any topic",
      },
      {
        id: 2,
        imgUrl: engage,
        title: "Engage",
        text: "Play in groups, organise a community, a league, a competition, safety and securely",
      },
      {
        id: 3,
        imgUrl: target,
        title: "Target",
        text: "Find any gaps in knowledge quickly, focus your learning where you need it",
      },
      {
        id: 4,
        imgUrl: report,
        title: "Report",
        text: "Generate results and analyze them any way you want, across any group or community",
      },
    ];

    const cardInfo = cardDetails.map(function(card) {
        return <MyCard key={card.id} title={card.title} text={card.text} imgUrl={card.imgUrl} />;
    })

    return (
      <div
        className="flex"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "20px"
        }}
      >
        {cardInfo}
      </div>
    );
}

export default CardSection
