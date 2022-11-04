import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="shadow-xl h-auto max-h-[400px] w-auto max-w-md border-slate-200 rounded-2xl">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
