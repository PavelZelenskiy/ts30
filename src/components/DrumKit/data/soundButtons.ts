import Bass from "./Sounds/Bass.wav";
import Crash from "./Sounds/Crash.wav";
import Hihat from "./Sounds/Hi-hat.wav";
import Ride from "./Sounds/Ride.wav";
import Snare from "./Sounds/Snare.wav";
import TomTomHi from "./Sounds/Tom-tom hi.wav";
import TomTomLow from "./Sounds/Tom-tom low.wav";

type SoundButton = {
  keyboard: {
    letter: string;
    code: number;
  };
  sound: {
    name: string;
    source: any;
  };
};

export const soundButtons: SoundButton[] = [
  {
    keyboard: {
      letter: "A",
      code: 65,
    },
    sound: {
      name: "Bass",
      source: Bass,
    },
  },
  {
    keyboard: {
      letter: "S",
      code: 83,
    },
    sound: {
      name: "Crash",
      source: Crash,
    },
  },
  {
    keyboard: {
      letter: "D",
      code: 68,
    },
    sound: {
      name: "Hi-hat",
      source: Hihat,
    },
  },
  {
    keyboard: {
      letter: "F",
      code: 70,
    },
    sound: {
      name: "Ride",
      source: Ride,
    },
  },
  {
    keyboard: {
      letter: "G",
      code: 71,
    },
    sound: {
      name: "Snare",
      source: Snare,
    },
  },
  {
    keyboard: {
      letter: "H",
      code: 72,
    },
    sound: {
      name: "Tom Hi ",
      source: TomTomHi,
    },
  },
  {
    keyboard: {
      letter: "J",
      code: 74,
    },
    sound: {
      name: "Tom Low",
      source: TomTomLow,
    },
  },
];
