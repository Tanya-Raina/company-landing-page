import React from 'react'
import StatCard from '../components/StatCard'
import stat1 from '../stat1.jpeg'
import stat2 from '../stat2.jpeg'
import stat3 from '../stat3.jpeg'
import stat4 from '../stat4.jpeg'
import LineBreak from './LineBreak'

function StatisticsSection() {
    const statDetails = [
      {
        id: 1,
        imgUrl: stat1,
        title: "Unique",
      },
      {
        id: 2,
        imgUrl: stat2,
        title: "Fun",
      },
      {
        id: 3,
        imgUrl: stat3,
        title: "Immersive",
      },
      {
        id: 4,
        imgUrl: stat4,
        title: "Unlimited Content",
      },
      {
        id: 5,
        imgUrl: stat1,
        title: "Ease of Use",
      },
      {
        id: 6,
        imgUrl: stat2,
        title: "Useful",
      },
    ];

    const statInfo = statDetails.map(function (card) {
      return <StatCard key={card.id} imgUrl={card.imgUrl} title={card.title} />;
    });

    return (
      <div>
        <div
          style={{
            float: "left",
            width: "30%",
            marginLeft: "15%",
            marginRight: "8%",
            marginTop: "7%",
            textAlign: "left",
          }}
        >
          <LineBreak length={"15%"} />
          <h2>What our champions are saying...</h2>
          <p>
            Not only is Champion a great way to learn faster, but it's also a
            great experience. We surveyed some Champions users and here's what
            they thought:
          </p>
        </div>

        <div
          className="container"
          style={{
            display: "flex",
            width: "25%",
            flexWrap: "wrap",
            marginRight: "33%",
          }}
        >
          {statInfo}
        </div>
      </div>
    );
}

export default StatisticsSection
