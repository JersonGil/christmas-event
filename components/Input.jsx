import React from "react";
import { capitalize } from "lodash";
import PropTypes from "prop-types";

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={capitalize(capitalize)} className="text-base">
        {label}
      </label>
      <input
        className="border-slate-200 h-12 w-auto border-2 rounded-lg p-4 text-xs text-slate-500 outline-slate-200"
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
