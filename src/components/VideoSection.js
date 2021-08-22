import React from 'react'
import hollowlaptop from '../hollowlaptop.png'

function VideoSection() {
    return (
      <div width="">
        <h2>Gamified online learning & assessment</h2>
        <p>
          Champions helps anyone to learn faster and be smarter.........while
          having fun!
        </p>
        {/* <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/hHIikHJV9fI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <div width="50%">
          <div
            id="over"
            style={{
              background: "url(" + hollowlaptop + ") no-repeat center",
              backgroundSize: "716px 300px",
              backgroundRepeat: "no-repeat",
              height: "500px",
              width: "750px",
              margin: "auto",
              position: "relative",
            }}
          >
            <iframe
              style={
                {
                  position: "absolute", top: "15vh", left: "18vh"
                }
              }
              title="YouTube video player"
              src="https://www.youtube.com/embed/hHIikHJV9fI"
              width="455vw"
              height="220vw"
                position="absolute"
            ></iframe>
          </div>
        </div>
      </div>
    );
}

export default VideoSection
