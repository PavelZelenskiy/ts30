import React, { useState } from "react";
import "./drumKit.css";
import { SoundButton } from "./components/SoundButton/SoundButton";
import { soundButtons } from "./data/soundButtons";

export function DrumKit() {
  const [isActive, setActive] = useState(false);
  const [keyCode, setKeyCode] = useState(0);

  return (
    <div
      className="drum_kit"
      onKeyDown={(e) => {
        setActive(true);
        setKeyCode(e.keyCode);
      }}
      onKeyUp={(e) => {
        setActive(false);
      }}
      tabIndex={0}
    >
      {soundButtons.map((button) => (
        <SoundButton
          {...button}
          key={button.id}
          isActive={button.keyboradLetterCode === keyCode ? isActive : false}
        />
      ))}
    </div>
  );
}
