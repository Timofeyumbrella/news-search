import React from "react";

import "./Image.styles.scss";

const Image = ({ urlToImage }) => {
  return urlToImage ? (
    <img className="image" src={urlToImage} alt="" />
  ) : (
    <div className="image-not-found" />
  );
};

export default Image;
