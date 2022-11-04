import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ children }) => {
  return (
    <div className="flex p-6 h-44 max-h-44 max-w-44 flex-col items-start justify-center">
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
