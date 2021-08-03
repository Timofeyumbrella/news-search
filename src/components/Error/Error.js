import React from "react";

import "./Error.styles.scss";

const Error = ({ error }) => {
  return (
    <div className="error">
      <h2 className="error__message">{error}</h2>
    </div>
  );
};

export default Error;
