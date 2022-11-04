import React from "react";
import PropTypes from "prop-types";

const BodyCard = ({ children }) => {
  return (
    <div className="flex p-4 h-auto overflow-auto flex-col items-start justify-center">
      {children}
    </div>
  );
};

BodyCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BodyCard;
