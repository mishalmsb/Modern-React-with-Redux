import React from 'react';
import {YoutubeVideo, YoutubeVideoSrc} from "../../constants/youtube";

type Props = {
  video: YoutubeVideo | null;
};

const VideoDetail = ({video, ...props}: Props) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `${YoutubeVideoSrc}${video.id.videoId}`;

  return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc}/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
  );
};

export default VideoDetail;
