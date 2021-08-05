import React from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

import "./FavouritesIcon.styles.scss";

const FavouritesIcon = ({ onClick }) => {
  return (
    <button className="favourites-icon" onClick={onClick}>
      <Star width="4rem" height="4.5rem" />
    </button>
  );
};

export default FavouritesIcon;
