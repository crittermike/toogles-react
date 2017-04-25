/* global gapi */

import React, { Component } from 'react';
import './VideoInfo.css';

class VideoInfo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};

    let request = gapi.client.youtube.videos.list({
      id: props.videoId,
      part: 'contentDetails,snippet'
    });

    request.execute((response) => {
      let video = response.items[0];
      console.log(video);
      this.setState({ video: {
        title: video.snippet.title,
        url: 'https://youtube.com/watch?v=' + video.id,
        description: video.snippet.description
      }});
    });


  };

  render() {
    if (this.state.video) {
      return (
        <div className="video__info">
          <h3>
            <a title="View on YouTube" href={ this.state.video.url }>
              { this.state.video.title }
            </a>
          </h3>
          { this.state.video.description }
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