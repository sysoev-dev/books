import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LoginForm from '../login-form';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Close from '@mui/icons-material/Close';
import LoginUser from '../login-user';
import { account, ID } from '../../lib/appwrite';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 20,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

  function handleSubmitLoginForm(email, password) {
    login(email, password);
  }

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label='Modal open'>
        {loggedInUser ? <AccountCircle /> : <LoginIcon />}
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <IconButton onClick={handleClose} aria-label='Close modal'>
            <Close />
          </IconButton>
          <p>
            {loggedInUser ? (
              <LoginUser
                userName={loggedInUser.name}
                logOut={async () => {
                  await account.deleteSession('current');
                  setLoggedInUser(null);
                }}
              />
            ) : (
              <LoginForm submitForm={handleSubmitLoginForm} />
            )}
          </p>
        </Box>
      </Modal>
      {/* 
      <div>
       

        <form>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type='button' onClick={() => login(email, password)}>
            Login
          </button>

          <button
            type='button'
            onClick={async () => {
              await account.create(ID.unique(), email, password, name);
              login(email, password);
            }}
          >
            Register
          </button>

          <button
            type='button'
            onClick={async () => {
              await account.deleteSession('current');
              setLoggedInUser(null);
            }}
          >
            Logout
          </button>
        </form>
      </div>
      */}
    </div>
  );
}
