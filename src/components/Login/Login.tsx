import React, { useState } from 'react';
import Title from '../../UI/Title/Title';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Link from '../../UI/Link/Link';
import styles from './Login.module.scss'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpperCase && hasMinLength;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsFormValid(validateEmail(e.target.value) && validatePassword(password));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsFormValid(validateEmail(email) && validatePassword(e.target.value));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('https://example.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.wrapper}>
        <Title>Войдите в свой профиль</Title>
            <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Электронная почта'
                required
            />
            <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                placeholder='Пароль'
                onChange={handlePasswordChange}
                required
            />
            </form>
            <Link link="/">Забыли пароль?</Link>
            <Button disabled={!isFormValid} />
            <Link link="/">Зарегистрироваться</Link>
    </div>
  );
};

export default Login;