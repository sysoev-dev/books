/* eslint-disable react/prop-types */
import './index.css';
import { userAvatar } from '../../lib/appwrite';
import Button from '@mui/material/Button';

export default function LoginUser({ userName, logOut }) {
  return (
    <div className='profile'>
      <img className='profile__avatart' src={userAvatar} alt='User Avatar' />
      <p className='profile__title'>Здравствуйте, {userName}</p>
      <Button onClick={logOut} variant='outlined'>
        Выйти
      </Button>
    </div>
  );
}
