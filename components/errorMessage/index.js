import s from "./styles.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={s.errorMessage}>&#10060; {message}</p>;
};

export default ErrorMessage;
