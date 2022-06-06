import React, {Component, RefObject} from 'react';
import {UnsplashImage} from "../../../constants/unsplash";

type Props = {
  image: UnsplashImage
};

type State = {
  spans?: number;
};

class ImageCard extends Component<Props, State> {

  imageRef: RefObject<HTMLImageElement>;

  // imageRef = React.useRef<HTMLDivElement>(null);

  constructor(props: Props) {
    super(props);

    this.state = {spans: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current?.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current?.clientHeight || 0;

    const spans = Math.ceil(height / 10);

    this.setState({spans});
  };

  render() {
    const {description, urls} = this.props.image;

    return (
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
          <img ref={this.imageRef} alt={description} src={urls?.regular}/>
        </div>
    );
  }
}

export default ImageCard;
