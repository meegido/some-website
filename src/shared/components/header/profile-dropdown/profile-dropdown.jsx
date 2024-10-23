import styles from './profile-dropdown.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import profileImage from '../../../../assets/images/profile.jpg';
import useToggle from '../../../../hooks/use-toggle';
import React from 'react';

const ProfileDropdown = ({ handleLogout }) => {
  const dropdownRef = React.useRef();
  const [isProfileOpen, toggleProfile] = useToggle(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleProfile(false);
      }
    };

    const handleDismiss = (event) => {
      if (event.code === 'Escape') {
        toggleProfile(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleDismiss);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleDismiss);
    };
  }, [toggleProfile]);

  return (
    <div className={styles.dropdown}>
      <button className={styles.avatar__button} onClick={() => toggleProfile()}>
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

export default ProfileDropdown;
