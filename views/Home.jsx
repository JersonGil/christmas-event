import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DATE_TARGET = new Date("December 25, 2022");
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

// ** COMPOENTNS
import { TimeLabel } from "../components";

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
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
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
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="font-bold text-7xl text-white">La Navidad Comienza:</h1>
        <br />
        <div className="flex flex-wrap gap-8">
          <TimeLabel timeLabel={days} timeType="DIAS" />
          <span className="text-6xl text-white">:</span>
          <TimeLabel timeLabel={hours} timeType="HORAS" />
          <span className="text-6xl text-white">:</span>
          <TimeLabel timeLabel={minutes} timeType="MINUTOS" />
          <span className="text-6xl text-white">:</span>
          <TimeLabel timeLabel={seconds} timeType="SEGUNDOS" />
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {};

export default Home;
