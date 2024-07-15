import React from 'react';
import Title from '../../UI/Title/Title';
import styles from './Login.module.scss'

const Login: React.FC = () => {

  return (
    <div className={styles.wrapper}>
        <Title>Войдите в свой профиль</Title>
    </div>
  );
};

export default Login;