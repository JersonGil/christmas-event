import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ children }) => {
  return (
    <div className="flex h-60 max-h-60 max-w-44 flex-col items-start justify-center">
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
