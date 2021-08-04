import React from "react";
import { useSelector } from "react-redux";

import "./FavouritesIcon.styles.scss";

const FavouritesIcon = ({ onClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <i
      className={`fas fa-star favourites-icon favourites-icon--${theme}`}
      onClick={onClick}
    />
  );
};

export default FavouritesIcon;
