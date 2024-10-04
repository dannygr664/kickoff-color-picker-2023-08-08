import { useField } from "formik";

import s from "./styles.module.css";

function FormikInputField({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={s.inputFieldContainer}>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className={s.errorMessage}>{meta.error}</p>
      ) : null}
    </div>
  );
}

export default FormikInputField;
