import "./CountDown.css";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("March 22, 2024 00:00:00").getTime();
  const [countdown, setCountdown] = useState(calculateCountdown());

  function calculateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    let interval;

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        // Target date has passed, stop the countdown
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        // Calculate and update the countdown
        setCountdown(calculateCountdown());
      }
    }

    interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [calculateCountdown, targetDate]);

  return (
    <div id="container">
      <p className="geek-games-timer">
        {countdown.days}D : {countdown.hours}H <span className="hideMinutes">: {countdown.minutes}M :{" "}
          {countdown.seconds}S</span>
      </p>
      <p className="geek-games-timer">
        {countdown.days}D : {countdown.hours}H <span className="hideMinutes">: {countdown.minutes}M :{" "}
          {countdown.seconds}S</span>
      </p>
      <p className="geek-games-timer">
        {countdown.days}D : {countdown.hours}H <span className="hideMinutes">: {countdown.minutes}M :{" "}
          {countdown.seconds}S</span>
      </p>
    </div>
  );
};

export default CountDown;
