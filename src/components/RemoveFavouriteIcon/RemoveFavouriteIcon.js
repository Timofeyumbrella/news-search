import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Remove } from "../../assets/icons/remove.svg";

import "./RemoveFavouriteIcon.styles.scss";

const RemoveFavouriteIcon = ({ onClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Remove
      className={`remove-favourite-icon remove-favourite-icon--${theme}`}
      onClick={onClick}
    />
  );
};

export default RemoveFavouriteIcon;
