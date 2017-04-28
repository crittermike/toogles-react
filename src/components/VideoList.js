/* global gapi */

import React, { Component } from 'react';
import VideoTeaser from './VideoTeaser';

class VideoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};

    let request = gapi.client.youtube.videos.list({
      chart: 'mostPopular',
      maxResults: 50,
      part: 'contentDetails,snippet'
    });

    request.execute((response) => {
      this.setState({ videos: response.items });
    });
  };

  render() {
    if (this.state.videos) {
      return (
        <div className="video__teasers">
        {this.state.videos.map((video) => {
          return <VideoTeaser chooseVideo={this.props.chooseVideo} key={video.id} video={video} />;
        })}
        </div>
      );
    } else {
      return (
        <h3>Loading videos</h3>
      );
    }
  };
}

export default VideoList;