import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Image.styles.scss";

const Image = ({ urlToImage, isListed }) => {
  return (
    <>
      {urlToImage && isListed && (
        <LazyLoadImage src={urlToImage} effect="blur" className="image" />
      )}
      {urlToImage && !isListed && <img src={urlToImage} className="image" />}
      {!urlToImage && <div className="image-not-found" />}
    </>
  );
};

export default Image;
