import React, { useState } from 'react';
import Title from '../../UI/Title/Title';
import Input from '../../UI/Input/Input';
import Button from '@/UI/Button/Button';
import styles from './Login.module.scss'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  return (
    <div className={styles.wrapper}>
        <Title>Войдите в свой профиль</Title>
            <form>
            <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Электронная почта'
                required
            />
            <Input
                type='password'
                id="password"
                value={password}
                placeholder='Пароль'
                onChange={handlePasswordChange}
                required
            />
            </form>
    </div>
  );
};

export default Login;