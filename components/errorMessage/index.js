import s from "./styles.module.css";

function ErrorMessage({ message }) {
  return <p className={s.errorMessage}>&#10060; {message}</p>;
}

export default ErrorMessage;
