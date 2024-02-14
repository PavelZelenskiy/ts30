import React, { FC, useEffect } from "react";
import "./soundButton.css";
import useSound from "use-sound";

type SoundButton = {
  keyboard: {
    letter: string;
    code: number;
  };
  sound: {
    name: string;
    source: any;
  };
  isActive: boolean;
};

export const SoundButton: FC<SoundButton> = ({ sound, keyboard, isActive }) => {
  const [playSound] = useSound(sound.source);

  useEffect(() => {
    if (isActive) {
      playSound();
    }
  }, [isActive]);

  return (
    <div className={`sound_button ${isActive ? "playing" : ""}`}>
      <div className="button_letter">{keyboard.letter}</div>
      <span className="sound">{sound.name}</span>
    </div>
  );
};
