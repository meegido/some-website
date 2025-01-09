import styles from './drawer.module.css';
import { X as Close } from 'lucide-react';

interface DrawerProps {
  handleDismiss: () => void;
  children: React.ReactNode;
}

const Drawer = ({ handleDismiss, children }: DrawerProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>

      <div className={styles.drawer}>
        <button className={styles.close__btn} onClick={handleDismiss}>
          <Close size={18} strokeWidth={3} />
        </button>
        {children}{' '}
      </div>
    </div>
  );
};

export default Drawer;
