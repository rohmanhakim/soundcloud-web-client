import React, { PropTypes } from 'react'
import { connect } from  'react-redux'

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

function mapStateToProps(state){
  const tracks = state.track;
  return {
    tracks
  }
}

export default connect(mapStateToProps)(Stream);
