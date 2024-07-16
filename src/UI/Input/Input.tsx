import React, { useState } from 'react';
import styles from './Input.module.scss';
import eye from '../../assets/icons/eye.svg';
import eyeclose from '../../assets/icons/eyeclose.svg';
import '../../index.css'

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, placeholder, required, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${styles.wrapper} ${type === 'email' ? styles.mail : type === 'password' ? styles.password : ''}`}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={styles.input}
      />
      {type === 'password' && (
        <button
          type="button"
          className={styles.password_eye}
          onClick={toggleShowPassword}
        >
          <img src={showPassword ? eyeclose : eye} alt="eye" />
        </button>
      )}
      {errorMessage && <div className='error'>{errorMessage}</div>}
    </div>
  );
};

export default Input;