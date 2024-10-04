import { useState, useEffect } from "react";
import axios from "axios";

import s from "./styles.module.css";

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("rgb(0,0,0");

  useEffect(() => {
    const validateAndSetBackgroundColor = () => {
      if (
        red >= 0 &&
        red <= 255 &&
        green >= 0 &&
        green <= 255 &&
        blue >= 0 &&
        blue <= 255
      ) {
        setBackgroundColor(`rgb(${red}, ${green}, ${blue})`);
      }
    };

    validateAndSetBackgroundColor();
  }, [red, green, blue]);

  return (
    <div className={s.colorPickerContainer} style={{ backgroundColor }}>
      <input
        className={s.input}
        type="number"
        min="0"
        max="255"
        onChange={(ev) => setRed(ev.target.value)}
        value={red}
        placeholder="R"
        required
      />
      <input
        className={s.input}
        type="number"
        min="0"
        max="255"
        onChange={(ev) => setGreen(ev.target.value)}
        value={green}
        placeholder="G"
        required
      />
      <input
        className={s.input}
        type="number"
        min="0"
        max="255"
        onChange={(ev) => setBlue(ev.target.value)}
        value={blue}
        placeholder="B"
        required
      />
    </div>
  );
};

export default ColorPicker;
