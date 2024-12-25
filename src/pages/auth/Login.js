import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authActions';
import LogInput from '../../components/LogInput/LogInput';
import LogButton from '../../components/LogInput/LogButton';
import styles from './Login.module.scss';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icon/google-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon/facebook-icon.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    navigate('/');
  };
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.link_container}>
          <LogButton
            customClass={styles.link_button}
            text="Sign in via Google"
            type="button"
            icon={<GoogleIcon />}
            iconClass={styles.link_icon}
            style={{
              width: '310px',
              height: '42px',
            }}
          />
          <LogButton
            customClass={styles.link_button}
            text="Sign in via Facebook"
            type="button"
            icon={<FacebookIcon />}
            iconClass={styles.link_icon}
            style={{
              width: '310px',
              height: '42px',
            }}
          />
        </div>
        <div className={styles.line}></div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <LogInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            customClass={styles.auth_input}
            style={{
              width: '310px',
              height: '42px',
            }}
          />
          <LogInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            customClass={styles.auth_input}
            style={{
              width: '310px',
              height: '42px',
            }}
          />
          <LogButton customClass={styles.forgot_button} text="Forgot Password?" type="button" />
          <div className={styles.button_container}>
            <Link to="/register">
              <LogButton customClass={styles.create_button} text="Create Account" type="button" />
            </Link>
            <LogButton customClass={styles.button} text="Sign in" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
