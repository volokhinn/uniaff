import React, { useState } from 'react';
import Title from '../../UI/Title/Title';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Link from '../../UI/Link/Link';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError('Некорректный адрес электронной почты.');
    } else {
      setEmailError('');
    }

    setIsFormValid(validateEmail(newEmail) && validatePassword(password));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError('Пароль должен содержать минимум 6 символов и хотя бы одну заглавную букву.');
    } else {
      setPasswordError('');
    }

    setIsFormValid(validateEmail(email) && validatePassword(newPassword));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      if (!validateEmail(email)) {
        setEmailError('Некорректный адрес электронной почты.');
      }
      if (!validatePassword(password)) {
        setPasswordError('Пароль должен содержать минимум 6 символов и хотя бы одну заглавную букву.');
      }
      return;
    }
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
          errorMessage={emailError}
        />
        <Input
          type="password"
          id="password"
          value={password}
          placeholder='Пароль'
          onChange={handlePasswordChange}
          required
          errorMessage={passwordError}
        />
      </form>
      <Link link="/">Забыли пароль?</Link>
      <Button disabled={!isFormValid} />
      <Link link="/">Зарегистрироваться</Link>
    </div>
  );
};

export default Login;