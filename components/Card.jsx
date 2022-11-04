import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="shadow-xl h-auto max-h-[500px] w-auto max-w-md bg-white bg-opacity-25 border-slate-200 rounded-2xl">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
