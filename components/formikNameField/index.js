import { useField } from "formik";

import ErrorMessage from "../errorMessage";

import s from "./styles.module.css";

const FormikNameField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.inputFieldContainer}>
      <label className={s.label}>Palette Name</label>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default FormikNameField;
