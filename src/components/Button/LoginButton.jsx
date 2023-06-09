import styles from './Button.module.scss'

const LoginButton = ({size, state, title, isValid, type }) => {
  return (
    <button
      type={type}
      disabled={!isValid}
      className={ isValid ? `${styles[size]} ${styles[state]}` : `${styles[size]} ${styles.disabled}`}
    >
      {title}
    </button>
  );
};
export default LoginButton;
