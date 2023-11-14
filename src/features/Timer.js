import React, { useState, useRef, useEffect } from "react";
import {  useSelector } from "react-redux";
import {
  selectAllSaleProducts,
} from "./product/productSlice";

export default function Timer({endTime}) {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e) => {
    const total = endTime - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / minute) % 60);
    const hours = Math.floor((total / hour) % 24);
    const days = Math.floor((total / day) % 30);
    return {
      total,
      hours,
      minutes,
      seconds,
      days,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds,days } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (days > 9 ? days : "0" + days) +
          "d " +
          (hours > 9 ? hours : "0" + hours) +
          "h " +
          (minutes > 9 ? minutes : "0" + minutes) +
          "m " +
          (seconds > 9 ? seconds : "0" + seconds) +
          "s left"
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };


  useEffect(() => {
    clearTimer();
  }, [endTime]);


  return (
    <div className="App">
      <h3 style={{ color: "#00FF66" }}>{timer}</h3>
    </div>
  );
}
