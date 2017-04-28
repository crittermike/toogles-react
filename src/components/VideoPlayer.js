import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="video__player">
        <YouTube videoId={ this.props.video.id } />
      </div>
    );
  }
}

export default VideoPlayer;