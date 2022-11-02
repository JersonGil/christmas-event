import React from "react";
import PropTypes from "prop-types";

const TimeLabel = ({ timeLabel, timeType }) => {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <h2 className="text-6xl text-white">{timeLabel}</h2>
      <label className="text-1xl text-white">{timeType}</label>
    </div>
  );
};

TimeLabel.propTypes = {
  timeLabel: PropTypes.string.isRequired,
  timeType: PropTypes.string.isRequired,
};

export default TimeLabel;
