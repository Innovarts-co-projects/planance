import { memo } from 'react';

import useClickOutside from '../../hook/useClickOutside';

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
        {' '}
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
        <button type="submit">
          Save Changes
        </button>
      </form>
    </UserSettingsContainer>
  );
}

export default memo(UserSettings);
