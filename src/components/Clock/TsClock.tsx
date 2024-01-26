import React from "react";
import "./tsClock.css";
import { ClockHand } from "./ClockHand/ClockHand";

export function TsClock() {
  return (
    <div className="ts_clock">
      <div className="clock_face">
        <div className="clock_face_inner">
          <ClockHand timeType="seconds" />
          <ClockHand timeType="minutes" />
          <ClockHand timeType="hours" />
        </div>
      </div>
    </div>
  );
}
