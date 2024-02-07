import React, { useState } from "react";
import "./drumKit.css";
import { SoundButton } from "./SoundButton/SoundButton";
import { soundButtons } from "./data/soundButtons";

export const DrumKit = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [keyCode, setKeyCode] = useState<number | null>(null);

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
          key={button.keyboard.code}
          isActive={button.keyboard.code === keyCode ? isActive : false}
        />
      ))}
    </div>
  );
};
