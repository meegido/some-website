import Header from './components/header/header';
import styles from './app.module.css';
import LoginForm from './components/form/login-form';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <LoginForm />
      </main>
    </>
  );
}

export default App;
