import React from "react";
import useTimer from "../../../hooks/useTimer";
import TimerBox from "./TimerBox";

function Timer() {
  const { day, hour, minute, second } = useTimer();

  return (
    <div className="grid grid-cols-2 auto-rows-max gap-8 md:grid-cols-4">
      <TimerBox value={day} label="days" />
      <TimerBox value={hour} label="hours" />
      <TimerBox value={minute} label="minutes" />
      <TimerBox value={second} label="seconds" />
    </div>
  );
}

export default Timer;
