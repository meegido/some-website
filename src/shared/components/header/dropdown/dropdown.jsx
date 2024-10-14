import styles from './dropdown.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import profileImage from '../../../../assets/images/profile.jpg';

const Dropdown = ({ toggleDropdown, isProfileOpen, handleLogout, dropdownRef }) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.avatar__button} onClick={toggleDropdown}>
        <div className={styles.avatar__wrapper}>
          <img src={profileImage} alt="User profile image" />
        </div>
        <div>
          {isProfileOpen ? (
            <ChevronUp size={20} strokeWidth={3} />
          ) : (
            <ChevronDown size={20} strokeWidth={3} />
          )}
        </div>
      </button>
      {isProfileOpen && (
        <div className={styles.dropdown__content} ref={dropdownRef}>
          <button
            className={`${styles.header__button} ${styles.logout__button}`}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
