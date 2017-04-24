import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="video__player">
        <YouTube videoId="vkRDOcma9Qk" />
      </div>
    );
  }
}

export default VideoPlayer;