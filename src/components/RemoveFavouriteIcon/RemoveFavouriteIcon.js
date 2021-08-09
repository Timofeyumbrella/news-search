import React from "react";

import { ReactComponent as Remove } from "../../assets/icons/remove.svg";

import "./RemoveFavouriteIcon.styles.scss";

const RemoveFavouriteIcon = ({ onClick }) => {
  return (
    <button className="remove-favourite-icon" onClick={onClick}>
      <Remove width="3rem" height="4.5rem" />
    </button>
  );
};

export default RemoveFavouriteIcon;
