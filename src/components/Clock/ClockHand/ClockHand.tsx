import React, { useState } from "react";
import "./clockHand.css";

type timeType = {
  timeType: string;
};

type HandStyle = {
  width: string;
  height: string;
  background: string;
  position: any;
  top: string;
  left: string;
  transformOrigin: string;
  transition: string;
  transitionTimingFunction: string;
  transform: string;
};

export const ClockHand = ({ timeType }: timeType) => {
  const [time, setTime] = useState(0);

  let handHeight: string;
  let handWidth: string;
  let handLeft: string;
  let transition: string;

  function updateTime(timeType: string) {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    if (timeType === "minutes") {
      setTime((minutes / 60) * 360 + 90);
    } else if (timeType === "hours") {
      setTime((hours / 12) * 360 + 90);
    } else {
      setTime((seconds / 60) * 360 + 90);
    }
  }

  if (timeType === "minutes") {
    handHeight = "4px";
    handWidth = "40%";
    handLeft = "10%";
    transition = "all 0.05s";
  } else if (timeType === "hours") {
    handHeight = "6px";
    handWidth = "25%";
    handLeft = "25%";
    transition = "all 0.05s";
  } else {
    handHeight = "2px";
    handWidth = "50%";
    handLeft = "0";
    transition = "";
  }

  setInterval(() => updateTime(timeType), 1000);

  const handStyle: HandStyle = {
    width: handWidth,
    height: handHeight,
    background: "black",
    position: "absolute",
    top: "50%",
    left: handLeft,
    transformOrigin: "100%",
    transition: transition,
    transitionTimingFunction: "cubic-bezier(0, 2.21, 0.58, 1)",
    transform: `rotate(${time}deg)`,
  };

  return <div style={handStyle}></div>;
};
