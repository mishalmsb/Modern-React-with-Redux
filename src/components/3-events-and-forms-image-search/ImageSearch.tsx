import './ImageSearch.scss';
import React, {Component, CSSProperties} from 'react';
import SearchBar from './search-bar/SearchBar';
import Unsplash from '../../api/unsplash';
import {UnsplashImageSearchResults} from '../../constants/unsplash';
import ImageList from './image-list/ImageList';

type Props = {};

type State = {
  imageSearchResults: UnsplashImageSearchResults;
};

const uiContainerStyles: CSSProperties = {
  marginTop: '80px',
};

class ImageSearch extends Component<Props, State> {
  state: State = {imageSearchResults: null!};

  // componentDidMount(): void {
  //   this.onSearchSubmit('test');
  // }

  onSearchSubmit = async (term: string): Promise<void> => {
    const imageSearchResults: UnsplashImageSearchResults = await Unsplash.searchImages(term);
    console.log(imageSearchResults);
    this.setState({
      imageSearchResults,
    });
  };

  renderImages = () => {
    return this.state.imageSearchResults && this.state.imageSearchResults.results ?
        <ImageList images={this.state.imageSearchResults.results}></ImageList>
        : null;
  };

  render() {
    return (
        <div className="ui container" style={uiContainerStyles}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          {this.renderImages()}
        </div>
    );
  }
}

export default ImageSearch;
