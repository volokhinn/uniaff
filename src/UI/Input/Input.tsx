import React from 'react';
import styles from './Input.module.scss'

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, placeholder, required }) => {
  return (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={styles.input}
      />
  );
};

export default Input;