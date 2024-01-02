import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LoginForm from '../login-form';
import RegisterForm from '../register-form';
import Close from '@mui/icons-material/Close';
import LoginUser from '../login-user';
import { account, ID } from '../../lib/appwrite';
import { userAvatar } from '../../lib/appwrite';
import { useUser } from '../../lib/context/user';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(249, 243, 238);',
  borderRadius: 5,
  boxShadow: 20,
  p: 4,
};

export default function BasicModal() {
  const user = useUser();
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSignUp(false);
  };

  useEffect(() => {
    if (user?.current?.name) {
      setIsAuth(true);
    }
  }, [user]);

  function handleSubmitLoginForm() {
    user.login(email, password);
  }

  async function handleSubmitRegisterForm() {
    await account.create(ID.unique(), email, password, name);
    user.login(email, password);
  }

  return (
    <>
      <IconButton onClick={handleOpen} aria-label='Modal open'>
        {isAuth ? (
          <img
            className='nav__user-avatar'
            src={userAvatar}
            alt='User Avatar'
          />
        ) : (
          <LoginIcon />
        )}
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleClose}
            aria-label='Close modal'
          >
            <Close />
          </IconButton>

          {isAuth ? (
            <LoginUser
              userName={user?.current?.name}
              logOut={async () => {
                await account.deleteSession('current');
                setIsAuth(false);
              }}
            />
          ) : signUp ? (
            <RegisterForm
              email={email}
              password={password}
              name={name}
              setEmail={setEmail}
              setPassword={setPassword}
              setName={setName}
              submitForm={handleSubmitRegisterForm}
              setSignUp={setSignUp}
            />
          ) : (
            <LoginForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              submitForm={handleSubmitLoginForm}
              setSignUp={setSignUp}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}
