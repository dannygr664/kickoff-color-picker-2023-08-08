import { useState, useEffect } from "react";

import FormikColorComponentInputField from "../formikColorComponentInputField";

import s from "./styles.module.css";

const ColorPicker = ({
  isEditing,
  formValues,
  redFieldName,
  greenFieldName,
  blueFieldName,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("rgb(0,0,0)");

  useEffect(() => {
    const validateAndSetBackgroundColor = () => {
      const redValue = formValues[redFieldName];
      const greenValue = formValues[greenFieldName];
      const blueValue = formValues[blueFieldName];
      if (
        redValue >= 0 &&
        redValue <= 255 &&
        greenValue >= 0 &&
        greenValue <= 255 &&
        blueValue >= 0 &&
        blueValue <= 255
      ) {
        setBackgroundColor(`rgb(${redValue}, ${greenValue}, ${blueValue})`);
      }
    };

    validateAndSetBackgroundColor();
  }, [
    formValues[redFieldName],
    formValues[greenFieldName],
    formValues[blueFieldName],
  ]);

  return (
    <div className={s.colorPickerContainer} style={{ backgroundColor }}>
      {isEditing && (
        <>
          <FormikColorComponentInputField
            name={redFieldName}
            value={formValues[redFieldName]}
            placeholder="R"
          />
          <FormikColorComponentInputField
            name={greenFieldName}
            value={formValues[greenFieldName]}
            placeholder="G"
          />
          <FormikColorComponentInputField
            name={blueFieldName}
            value={formValues[blueFieldName]}
            placeholder="B"
          />
        </>
      )}
    </div>
  );
};

export default ColorPicker;
