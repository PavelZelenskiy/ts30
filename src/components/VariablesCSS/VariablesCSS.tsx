import React, { useState } from "react";
import "./variablesCSS.css";

type TSpanStyle = {
  fontSize: string;
  filter: string;
  color: string;
};

export const VariablesCSS = () => {
  const [color, setColor] = useState<string>("#ffffff");
  const [fontSize, setFontSize] = useState<number>(50);
  const [blur, setBlur] = useState<number>(0);

  const handleUpdate = (props: HTMLInputElement): void => {
    if (props.name === "font_color") {
      setColor(props.value);
    } else if (props.name === "blur") {
      setBlur(Number(props.value));
    } else {
      setFontSize(Number(props.value));
    }
  };

  const spanStyle: TSpanStyle = {
    fontSize: `${fontSize}px`,
    filter: `blur(${blur}px)`,
    color: color,
  };

  return (
    <div className="variables_css">
      <h1>
        Управляй CSS с помощью <span style={spanStyle}>JS</span>
      </h1>
      <div className="controls">
        <label>Color:</label>
        <input
          type="color"
          name="font_color"
          defaultValue="#ffffff"
          onChange={(e) => handleUpdate(e.target)}
        />
        <label>Blur:</label>
        <input
          type="range"
          name="blur"
          defaultValue="0"
          min="0"
          max="30"
          onChange={(e) => handleUpdate(e.target)}
        />
        <label>Font size:</label>
        <input
          type="range"
          name="font_size"
          min="50"
          max="300"
          onChange={(e) => handleUpdate(e.target)}
        />
      </div>
    </div>
  );
};
