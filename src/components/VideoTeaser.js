import React, { Component } from 'react';

class VideoTeaser extends Component {
  render() {
    return (
      <div className="teaser col-sm-6">
        <a href="#" onClick={() => { this.props.chooseVideo(this.props.video)} }>
          <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title} />
        </a>
        <a href="#" className="teaser__title" onClick={() => { this.props.chooseVideo(this.props.video)} }>
          {this.props.video.snippet.title}
        </a><br />
        <a href="#" className="teaser__channel">
          <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
          {this.props.video.snippet.channelTitle}
        </a>
        <span className="teaser__views">
          <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
          {this.props.video.statistics.viewCount}
        </span>
        <span className="teaser__date">
          <i className="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
          {this.props.video.snippet.publishedAt}
        </span>

      </div>
    );
  }
}

export default VideoTeaser;