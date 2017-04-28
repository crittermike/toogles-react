import React, { Component } from 'react';

class VideoTeaser extends Component {
  render() {
    return (
      <div className="teaser col-sm-6 col-md-4 col-lg-3"
           style={{backgroundImage: "url(" + this.props.video.snippet.thumbnails.medium.url + ")" }}>
        <a href="#" onClick={() => { this.props.chooseVideo(this.props.video)} }>
          <span className="teaser__title">{this.props.video.snippet.title}</span>
          <span className="teaser__meta">
            Hidden info like views and rating go here.
          </span>
        </a>
      </div>
    );
  }
}

export default VideoTeaser;