import React, { Component } from 'react';

class VideoTeaser extends Component {
  render() {
    return (
      <div className="teaser col-sm-6">
        <a href="#" onClick={() => { this.props.chooseVideo(this.props.video)} }
           style={{backgroundImage: "url(" + this.props.video.thumbnail + ")" }}>
          <span className="teaser__title">
            {this.props.video.snippet.title}
          </span>
          <span className="teaser__hide">
            <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
            {this.props.video.snippet.channelTitle}
          </span>
          <span className="teaser__hide">
            <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
            {this.props.video.statistics.viewCount}
          </span>
          <span className="teaser__hide">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
            {this.props.video.snippet.publishedAt}
          </span>
        </a>

      </div>
    );
  }
}

export default VideoTeaser;