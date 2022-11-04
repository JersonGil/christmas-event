import React from "react";
import PropTypes from "prop-types";

const CardFooter = ({ children }) => {
  return (
    <div className="flex p-5 flex-col items-start justify-center px-5 py-3 w-full mt-auto">
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
