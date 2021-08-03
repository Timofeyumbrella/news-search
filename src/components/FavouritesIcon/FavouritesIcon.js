import React from "react";

import "./FavouritesIcon.styles.scss";

const FavouritesIcon = ({ onClick, isInHeader }) => {
  return (
    <i
      className={`${
        isInHeader ? `favourites-icon--header` : `favourites-icon`
      } fas fa-star`}
      onClick={onClick}
    />
  );
};

export default FavouritesIcon;
