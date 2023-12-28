/* eslint-disable react/prop-types */
import { userAvatar } from '../../lib/appwrite';
export default function LoginUser({ userName, logOut }) {
  return (
    <div className='login-user-box'>
      <p className='login-user-box__title'>
        Здравствуйте, {userName}
        <img className='nav__user-avatar' src={userAvatar} alt='User Avatar' />
      </p>

      <button onClick={logOut}>Выйти</button>
    </div>
  );
}
