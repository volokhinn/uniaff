import React from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled }) => {
  return (
    <button type="submit" disabled={disabled} className={styles.btn}>
      Войти
    </button>
  );
};

export default Button;