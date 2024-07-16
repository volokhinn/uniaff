import React from 'react';

interface ButtonProps {
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled }) => {
  return (
    <button type="submit" disabled={disabled}>
      Login
    </button>
  );
};

export default Button;