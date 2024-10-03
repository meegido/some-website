import React from 'react';
import styles from './login-form.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../shared/input-field/input-field';
import { UserContext } from '../../providers/user-provider';
import Button from '../shared/button/button';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(UserContext);
  const [formData, setFormData] = React.useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(formData);

    navigate('/');
  };

  return (
    <>
      <form className={styles['login__form']} onSubmit={handleLogin}>
        <InputField
          label="Name"
          type="text"
          name="username"
          value={formData.formDataname}
          onChange={handleInputChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" className={styles['login__button']}>
          Log in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
