  /* global gapi */

  const API_KEY = 'AIzaSyAZDgDzsLyU1E1D2Ic76Eol2NbuBp8SKyg';

    import React, { Component } from 'react';
    import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
    import VideoInfo from '../../components/VideoInfo/VideoInfo';
    import SearchBox from '../../components/SearchBox/SearchBox';
    import './App.css';

    class App extends Component {
      constructor(props, context) {
        super(props, context);
        this.state = {};
      };

      componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://apis.google.com/js/client.js";
        script.async = true;

        script.onload = () => {
          gapi.client.setApiKey(API_KEY);
          gapi.client.load('youtube', 'v3', () => {
            this.setState({ gapiReady: true })
          });
        };

        document.body.appendChild(script)
      }

      render() {
        if (this.state.gapiReady) {
          return (
            <div className="wrap">
              <div className="sidebar">
                <SearchBox />
                <VideoInfo videoId="mMWh4W1C2PM" />
              </div>
              <div className="content">
                <VideoPlayer />
              </div>
            </div>
          );
        } else {
          return (
            <div>Loading...</div>
          )
        }
      };
    }

    export default App;
