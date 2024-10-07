import { useField } from "formik";

import ErrorMessage from "../errorMessage";

import s from "./styles.module.css";

function FormikInputField({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={s.inputFieldContainer}>
      <label className={s.label}>{props.placeholder}</label>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}

export default FormikInputField;
