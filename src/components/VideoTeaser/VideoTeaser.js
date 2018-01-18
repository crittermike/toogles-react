import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import { formatNumber } from '../../helpers';

class VideoTeaser extends Component {
    render() {
        return (
            <div className="teaser col-sm-6 col-md-4 col-xl-3">
                <div className="teaser__image" style={{backgroundImage: "url(" + this.props.video.thumbnail + ")" }}> </div>
                <div className="teaser__meta">
                    <span className="teaser__title">
                        {this.props.video.snippet.title}
                    </span>
                    <a className="teaser__channel">
                        {this.props.video.snippet.channelTitle}
                    </a>
                    <span className="teaser__views">
                        {formatNumber(this.props.video.statistics.viewCount, 0)} views
                    </span>
                    <span className="teaser__date">
                        <TimeAgo date={this.props.video.snippet.publishedAt} />
                    </span>
                </div>
            </div>
        );
    }
}

export default VideoTeaser;