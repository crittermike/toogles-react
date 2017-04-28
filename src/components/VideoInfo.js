/* global gapi */

import React, { Component } from 'react';

class VideoInfo extends Component {
  render() {
    if (this.props.video) {
      return (
        <div className="video__info">
          <h3>
            <a title="View on YouTube" href={ 'http://youtube.com/watch?v=' + this.props.video.id }>
              { this.props.video.snippet.title }
            </a>
          </h3>
          { this.props.video.snippet.description }
        </div>
      );
    } else {
      return (
        <h3>Loading...</h3>
      )
    }
  };
}

export default VideoInfo;