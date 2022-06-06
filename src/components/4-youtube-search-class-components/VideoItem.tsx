import './VideoItem.scss';
import React from 'react';
import {YoutubeVideo} from "../../constants/youtube";

type Props = {
  video: YoutubeVideo;
  onVideoSelect: (video: YoutubeVideo) => void;
};

const VideoItem = ({video, onVideoSelect, ...props}: Props) => {
  return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
  );
};

export default VideoItem;
