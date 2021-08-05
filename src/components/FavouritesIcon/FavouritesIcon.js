import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

import "./FavouritesIcon.styles.scss";

const FavouritesIcon = ({ onClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <button
      className={`favourites-icon favourites-icon--${theme}`}
      onClick={onClick}
    >
      <Star width="4rem" height="4.5rem" />
    </button>
  );
};

export default FavouritesIcon;
