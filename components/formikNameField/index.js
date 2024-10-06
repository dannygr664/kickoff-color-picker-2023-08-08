import { useField } from "formik";

import s from "./styles.module.css";

function FormikNameField({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={s.inputFieldContainer}>
      <label>Name</label>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className={s.errorMessage}>{meta.error}</p>
      ) : null}
    </div>
  );
}

export default FormikNameField;
