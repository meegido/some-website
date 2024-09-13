import Header from './components/header/header';
import styles from './app.module.css';
import Form from './components/form/form';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Form />
      </main>
    </>
  );
}

export default App;
