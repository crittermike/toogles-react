/* global gapi */

const API_KEY = 'AIzaSyAZDgDzsLyU1E1D2Ic76Eol2NbuBp8SKyg';

import React, { Component } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    };

    loadYoutubeApi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";

        script.onload = () => {
            gapi.load('client', () => {
                gapi.client.setApiKey(API_KEY);
                gapi.client.load('youtube', 'v3', () => {
                    this.setState({ gapiReady: true })
                });
            });
        };

        document.body.appendChild(script);
    }

    chooseVideo = (video) => {
        document.title = video.snippet.title;
        this.setState({ video: video });
    };

    componentDidMount() {
        this.loadYoutubeApi();
    }

    render() {
        if (this.state.gapiReady) {
            return (
                <Router>
                  <div className="container-fluid">
                    <div className="row">
                      <Navigation />
                    </div>
                    <div className="row">
                      <Route name="list" exact path="/" component={VideoList}/>
                      <Route name="view" path="/view/:id" component={VideoDetail}/>
                    </div>
                  </div>
                </Router>
            );
        } else {
            return (
                <h3>Loading app...</h3>
            )
        }
    };
}

export default App;

// <VideoDetail video={ this.state.video } />
// <VideoList chooseVideo={this.chooseVideo} />
