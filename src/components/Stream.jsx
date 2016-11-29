import React, { PropTypes } from 'react'

const Stream = ({tracks = []}) => {
  return (
    <div>
      {
        tracks.map((track,key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  )
}

export default Stream
