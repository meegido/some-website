import styles from './profile-dropdown.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import profileImage from '../../../../assets/images/profile.jpg';
import useToggle from '../../../../hooks/use-toggle.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileDropdownProps {
  children: React.ReactNode;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = () => {
  const [isProfileOpen, toggleProfile] = useToggle(false);
  const navigate = useNavigate();

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleProfile();
      }
    };

    const handleDismiss = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        toggleProfile();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleDismiss);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleDismiss);
    };
  }, [toggleProfile]);

  const handleNavigate = () => {
    navigate('/settings');
  };

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
            onClick={handleNavigate}
          >
            Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
