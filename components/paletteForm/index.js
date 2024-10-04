import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ColorPicker from "../colorPicker";

import s from "./styles.module.css";

const PaletteForm = () => {
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

  return (
    <Formik
      initialValues={{
        red1: "0",
        green1: "0",
        blue1: "0",
        red2: "0",
        green2: "0",
        blue2: "0",
        red3: "0",
        green3: "0",
        blue3: "0",
        red4: "0",
        green4: "0",
        blue4: "0",
        red5: "0",
        green5: "0",
        blue5: "0",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form className={s.formContainer}>
          {colorPickerPropNames.map((propNames, index) => (
            <ColorPicker
              key={index}
              formValues={values}
              redFieldName={propNames.red}
              greenFieldName={propNames.green}
              blueFieldName={propNames.blue}
            />
          ))}
          <button type="submit">ADD</button>
        </Form>
      )}
    </Formik>
  );
};

export default PaletteForm;
