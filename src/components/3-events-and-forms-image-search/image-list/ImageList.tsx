import './ImageList.scss';
import React from 'react';
import {UnsplashImage} from '../../../constants/unsplash';
import ImageCard from "../image-card/ImageCard";

type Props = {
  images: UnsplashImage[];
};

const ImageList = ({images, ...props}: Props) => {
  const imageList = images.map((image: UnsplashImage) => {
    return <ImageCard key={image.id} image={image}/>;
  });

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
