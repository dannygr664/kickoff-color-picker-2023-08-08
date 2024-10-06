import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import FormikNameField from "../formikNameField";
import ColorPicker from "../colorPicker";

import s from "./styles.module.css";

const Palette = ({
  refreshPalettes,
  id,
  name,
  red1,
  green1,
  blue1,
  red2,
  green2,
  blue2,
  red3,
  green3,
  blue3,
  red4,
  green4,
  blue4,
  red5,
  green5,
  blue5,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const colorPickerPropNames = [
    {
      red: "red1",
      green: "green1",
      blue: "blue1",
    },
    {
      red: "red2",
      green: "green2",
      blue: "blue2",
    },
    {
      red: "red3",
      green: "green3",
      blue: "blue3",
    },
    {
      red: "red4",
      green: "green4",
      blue: "blue4",
    },
    {
      red: "red5",
      green: "green5",
      blue: "blue5",
    },
  ];

  const colorComponentNumberSchema = Yup.number()
    .typeError("0–255")
    .min(0, "0–255")
    .max(255, "0–255")
    .integer("Must be whole number")
    .required("Required");

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(255, "Max character limit exceeded")
      .required("Required"),
    red1: colorComponentNumberSchema,
    green1: colorComponentNumberSchema,
    blue1: colorComponentNumberSchema,
    red2: colorComponentNumberSchema,
    green2: colorComponentNumberSchema,
    blue2: colorComponentNumberSchema,
    red3: colorComponentNumberSchema,
    green3: colorComponentNumberSchema,
    blue3: colorComponentNumberSchema,
    red4: colorComponentNumberSchema,
    green4: colorComponentNumberSchema,
    blue4: colorComponentNumberSchema,
    red5: colorComponentNumberSchema,
    green5: colorComponentNumberSchema,
    blue5: colorComponentNumberSchema,
  });

  const updatePalette = async (values) => {
    setIsEditing(false);

    if (!values) return;

    const { status, data } = await axios.put("/api/palette", { id, ...values });

    if (status == 200) {
      refreshPalettes();
    }
  };

  const deletePalette = async () => {
    const { status, data } = await axios.delete("/api/palette", {
      data: { id },
    });

    if (status == 200) {
      refreshPalettes();
    }
  };

  return (
    <Formik
      initialValues={{
        name: name,
        red1: red1.toString(),
        green1: green1.toString(),
        blue1: blue1.toString(),
        red2: red2.toString(),
        green2: green2.toString(),
        blue2: blue2.toString(),
        red3: red3.toString(),
        green3: green3.toString(),
        blue3: blue3.toString(),
        red4: red4.toString(),
        green4: green4.toString(),
        blue4: blue4.toString(),
        red5: red5.toString(),
        green5: green5.toString(),
        blue5: blue5.toString(),
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        updatePalette(values);
      }}
    >
      {({ values }) => (
        <Form className={s.formContainer}>
          <div className={s.formInputsContainer}>
            {isEditing && <FormikNameField name="name" />}
            {!isEditing && <h3>{name}</h3>}
            <div className={s.formColorPickersContainer}>
              {colorPickerPropNames.map((propNames, index) => (
                <ColorPicker
                  key={index}
                  isEditing={isEditing}
                  formValues={values}
                  redFieldName={propNames.red}
                  greenFieldName={propNames.green}
                  blueFieldName={propNames.blue}
                />
              ))}
            </div>
          </div>
          {isEditing && <button type="submit">UPDATE</button>}
          {!isEditing && (
            <button type="button" onClick={() => setIsEditing(true)}>
              EDIT
            </button>
          )}
          {!isEditing && (
            <button type="button" onClick={() => deletePalette()}>
              DELETE
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Palette;
