import Header from './components/header/header';
import styles from './app.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles['login__form']}>
          <div className={styles['input']}>
            <label htmlFor="name">Preferred name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles['input']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Log in</button>
        </form>
      </main>
    </>
  );
}

export default App;
