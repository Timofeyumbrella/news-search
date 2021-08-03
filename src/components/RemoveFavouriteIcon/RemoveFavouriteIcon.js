import React from "react";

import "./RemoveFavouriteIcon.styles.scss";

const RemoveFavouriteIcon = ({ onClick }) => {
  return (
    <i className="fas fa-trash-alt remove-favourite-icon" onClick={onClick} />
  );
};

export default RemoveFavouriteIcon;
