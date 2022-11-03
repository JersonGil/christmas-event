import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DATE_TARGET = new Date("December 25, 2022");
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

// ** COMPOENTNS
import { TimeLabel, SantaClaus } from "../components";

const Home = ({ ...props }) => {
  // The state for our timer
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = () => {
    // Calcs
    const NOW = new Date();
    const DURATION = DATE_TARGET - NOW;
    const days = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const hours = Math.floor(
      (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
    );
    const minutes = Math.floor(
      (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
    );
    const seconds = Math.floor(
      (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    );
    setDays(days > 9 ? days : `0${days}`);
    setHours(hours > 9 ? hours : `0${hours}`);
    setMinutes(minutes > 9 ? minutes : `0${minutes}`);
    setSeconds(seconds > 9 ? seconds : `0${seconds}`);
  };

  useEffect(() => {
    let dateInterval = setInterval(() => {
      getTimeRemaining();
    }, 1000);
    return () => {
      clearInterval(dateInterval);
    };
  }, []);

  return (
    <section className="container-section">
      <div className="flex justify-center items-start h-screen flex-col mx-20">
        <div className="flex items-center flex-col">
          <h1 className="font-bold text-center text-4xl sm:text-7xl text-white">
            Christmas begins in:
          </h1>
          <br />
          <div className="flex flex-wrap gap-0 sm:gap-8">
            <TimeLabel timeLabel={days} timeType="DAYS" />
            <span className="text-3xl sm:text-6xl text-white">:</span>
            <TimeLabel timeLabel={hours} timeType="HOURS" />
            <span className="text-3xl sm:text-6xl text-white">:</span>
            <TimeLabel timeLabel={minutes} timeType="MINUTES" />
            <span className="text-3xl sm:text-6xl text-white">:</span>
            <TimeLabel timeLabel={seconds} timeType="SECONDS" />
          </div>
        </div>
      </div>
      <SantaClaus />
    </section>
  );
};

Home.propTypes = {};

export default Home;
