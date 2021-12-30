import styles from "./styles.module.scss";

const Button = ({ children, onClick, className, disabled, ...props }) => (
  <button
    className={`${styles.buttonContainer} ${className}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
