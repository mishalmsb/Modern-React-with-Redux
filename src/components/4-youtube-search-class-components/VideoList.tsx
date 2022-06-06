import React from 'react';
import VideoItem from './VideoItem';
import {YoutubeVideo} from "../../constants/youtube";

type Props = {
  videos: YoutubeVideo[];
  onVideoSelect: (video: YoutubeVideo) => void;
};

const VideoList = ({videos, onVideoSelect, ...props}: Props) => {
  const renderedList = videos.map(video => {
    return (
        <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
