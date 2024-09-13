import Header from './components/header/header';
import styles from './app.module.css';
import Form from './components/form/form';

function App() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('login');
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form handleLogin={handleLogin} />
      </main>
    </>
  );
}

export default App;
