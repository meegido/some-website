import { useNavigate, useRouteError } from 'react-router-dom';
import styles from './error-boundary.module.css';

const ErrorBoundary = () => {
  let error = useRouteError();
  const navigate = useNavigate();

  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.message}>
          <p>❤️‍🩹</p>
          <p>This url does not exist </p>
        </div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Go to home page
        </button>
      </section>
    </>
  );
};

export default ErrorBoundary;
