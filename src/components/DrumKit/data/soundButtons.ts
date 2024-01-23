import Bass from "./Sounds/Bass.wav";
import Crash from "./Sounds/Crash.wav";
import Hihat from "./Sounds/Hi-hat.wav";
import Ride from "./Sounds/Ride.wav";
import Snare from "./Sounds/Snare.wav";
import TomTomHi from "./Sounds/Tom-tom hi.wav";
import TomTomLow from "./Sounds/Tom-tom low.wav";

export const soundButtons = [
  {
    id: 1,
    keyboardLetter: "A",
    keyboradLetterCode: 65,
    sound: {
      soundName: "Bass",
      soundSource: Bass,
    },
  },
  {
    id: 2,
    keyboardLetter: "S",
    keyboradLetterCode: 83,
    sound: {
      soundName: "Crash",
      soundSource: Crash,
    },
  },
  {
    id: 3,
    keyboardLetter: "D",
    keyboradLetterCode: 68,
    sound: {
      soundName: "Hi-hat",
      soundSource: Hihat,
    },
  },
  {
    id: 4,
    keyboardLetter: "F",
    keyboradLetterCode: 70,
    sound: {
      soundName: "Ride",
      soundSource: Ride,
    },
  },
  {
    id: 5,
    keyboardLetter: "G",
    keyboradLetterCode: 71,
    sound: {
      soundName: "Snare",
      soundSource: Snare,
    },
  },
  {
    id: 6,
    keyboardLetter: "H",
    keyboradLetterCode: 72,
    sound: {
      soundName: "Tom Hi ",
      soundSource: TomTomHi,
    },
  },
  {
    id: 7,
    keyboardLetter: "J",
    keyboradLetterCode: 74,
    sound: {
      soundName: "Tom Low",
      soundSource: TomTomLow,
    },
  },
];
