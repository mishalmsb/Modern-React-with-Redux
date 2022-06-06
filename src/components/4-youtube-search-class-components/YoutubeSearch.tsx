import React, {Component} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import {searchYoutubeVideos, searchDummyYoutubeVideos} from "../../api/youtube";
import {YoutubeSearchSearchResults, YoutubeVideo} from "../../constants/youtube";

type Props = {};

type State = {
  videos?: YoutubeVideo[];
  selectedVideo?: YoutubeVideo | null;
};

class YoutubeSearch extends Component<Props, State> {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async (term: string): Promise<void> => {
    const {items}: YoutubeSearchSearchResults = await searchYoutubeVideos({term});
    // const {items}: YoutubeSearchSearchResults = await searchDummyYoutubeVideos({term});
    this.setState({
      videos: items,
      selectedVideo: items[0],
    });
  };

  render() {
    return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList
                    onVideoSelect={(video: YoutubeVideo) => this.setState({selectedVideo: video})}
                    videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default YoutubeSearch;
