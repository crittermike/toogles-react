/* global gapi */

import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';

class VideoDetail extends Component {
  render() {
    return (
      <div>
        <VideoInfo video={ this.props.video } />
        <VideoPlayer video={ this.props.video } />
      </div>
    );
  };
}

export default VideoDetail;