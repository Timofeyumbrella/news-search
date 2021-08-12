import React from "react";

import "./AspectRatio.styles.scss";

const AspectRatio = ({ ratio, children }) => {
  return (
    <div
      className="aspect-ratio"
      style={{
        paddingTop: `calc(1 / (${ratio}) * 100%)`,
      }}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
