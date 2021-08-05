import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Remove } from "../../assets/icons/remove.svg";

import "./RemoveFavouriteIcon.styles.scss";

const RemoveFavouriteIcon = ({ onClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <button
      className={`remove-favourite-icon remove-favourite-icon--${theme}`}
      onClick={onClick}
    >
      <Remove width="3rem" height="4.5rem" />
    </button>
  );
};

export default RemoveFavouriteIcon;
