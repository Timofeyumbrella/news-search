import React from "react";

import { ReactComponent as Remove } from "assets/icons/remove.svg";

import "./RemoveFavouriteIcon.styles.scss";

const RemoveFavouriteIcon = ({ onClick }) => {
  return (
    <button className="remove-favourite-icon" onClick={onClick}>
      <Remove />
    </button>
  );
};

export default RemoveFavouriteIcon;
