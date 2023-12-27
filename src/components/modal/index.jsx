import { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
// import LoginForm from '../login-form';

// const isAuth = false;

// AppWrite

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

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label='login'>
        <LoginIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h3>Modal content</h3>
        </Box>
      </Modal>
    </div>
  );
}
