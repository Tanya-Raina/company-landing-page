import React from 'react'

function LineBreak(props) {
    return (
      <div>
        <hr
          style={{
            border: "1.5px solid #7f97f9",
            borderRadius: "5px",
            opacity: "1",
            width: props.length,
            margin: "5em auto 2em auto",
          }}
        />
      </div>
    );
}

export default LineBreak
