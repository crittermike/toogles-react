import React from 'react';

import { storiesOf } from '@storybook/react';

import SearchBox from '../components/SearchBox/SearchBox';
import Navigation from '../components/Navigation/Navigation';
import VideoInfo from '../components/VideoInfo/VideoInfo';
import VideoTeaser from '../components/VideoTeaser/VideoTeaser';

let video = {
    id: '123456789',
    snippet: {
        title: 'This is the video title',
        description: 'This is a description of the video.',
        channelTitle: 'Channel Title',
        publishedAt: '2017-12-13 13:23:00'
    },
    statistics: {
        viewCount: 12345
    },
    thumbnail: 'https://source.unsplash.com/random'
};

storiesOf('Search Box', module)
    .add('Default', () => <SearchBox/>);

storiesOf('Navigation', module)
    .add('Default', () => <Navigation/>);

storiesOf('Video', module)
    .add('Info', () => <VideoInfo video={video}/>)
    .add('Teaser', () => <VideoTeaser video={video}/>);