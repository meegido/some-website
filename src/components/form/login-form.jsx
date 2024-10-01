import React from 'react';
import styles from './login-form.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from './input-field';
import { UserContext } from '../../providers/user-provider';

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
          label="Loved name"
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
        <button>Log in</button>
      </form>
    </>
  );
};

export default LoginForm;
