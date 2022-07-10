import { memo } from 'react';
import Image from 'next/image';

// hooks
import useClickOutside from '../../hook/useClickOutside';

// components
import Button from '../Button';

// images
import userPic from '../../assets/icons/user-pic.svg';
import settingsIcon from '../../assets/icons/settings.svg';

// local styles
import { UserSettingsContainer } from './userSettingsStyles';

interface UserSettingsProps {
  userName: string;
  userEmail: string;
  onModalRender: () => void;
  triggerRef: Element;
}

function UserSettings(
  {
    userName,
    userEmail,
    onModalRender,
    triggerRef,
  }: UserSettingsProps,
) {

  const modalRef = useClickOutside(() => {
    onModalRender();
  }, triggerRef);

  return (
    <UserSettingsContainer ref={modalRef}>
      <header>

        <div className="user-info">
          <div className="user-pic-container">
            <Image src={userPic} layout="raw" />
          </div>
          <h2 className="user-name">
            {userName}
          </h2>
        </div>

        <button
          disabled
          type="button"
          className="app-config"
        >
          <Image src={settingsIcon} layout="raw" />
        </button>
      </header>

      <form onSubmit={() => ''}>

        <label className="input-block" htmlFor="user-name-input">
          <span>Name:</span>
          <input type="text" placeholder={userName} id="user-name-input" />
        </label>

        <label className="input-block" htmlFor="user-email-input">
          <span>Email:</span>
          <input type="text" placeholder={userEmail} id="user-email-input" />
        </label>

        <label className="input-block" htmlFor="user-password-input">
          <span>Password:</span>
          <input disabled type="text" placeholder="●●●●●●●●●●●●●" id="user-password-input" />
        </label>
        <Button disabled type="submit">
          Save Changes
        </Button>
      </form>
    </UserSettingsContainer>
  );
}

export default memo(UserSettings);
