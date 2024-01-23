import React from "react";
import "./soundButton.css";
import useSound from "use-sound";

interface SoundButton {
  id: number;
  keyboardLetter: string;
  keyboradLetterCode: number;
  sound: {
    soundName: string;
    soundSource: any;
  };
  isActive: boolean;
}

export function SoundButton(props: SoundButton) {
  let SoundButtonClassName = "sound_button ";
  const [playSound] = useSound(props.sound.soundSource);

  if (props.isActive) {
    SoundButtonClassName = "sound_button playing";
    playSound();
  }

  return (
    <>
      <div className={SoundButtonClassName}>
        <div className="button_letter">{props.keyboardLetter}</div>
        <span className="sound">{props.sound.soundName}</span>
      </div>
    </>
  );
}
