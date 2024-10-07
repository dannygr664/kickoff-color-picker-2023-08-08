import { useField } from "formik";

import ErrorMessage from "../errorMessage";

import s from "./styles.module.css";

function FormikNameField({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={s.inputFieldContainer}>
      <label className={s.label}>Name</label>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}

export default FormikNameField;
