/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LoginForm({ submitForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    submitForm(email, password);
  }

  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      component='form'
    >
      <h3>Вход в аккаунт</h3>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        id='standard-basic'
        label='Ваш еmail:'
        variant='standard'
        margin='dense'
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        type='password'
        id='standard-basic'
        label='Ваш пароль'
        variant='standard'
        margin='dense'
      />

      <Stack mt={1.5} spacing={2} direction='row'>
        <Button type='submit' sx={{ mt: 2 }} variant='contained'>
          Войти
        </Button>
        <Button variant='outlined'>Регистрация</Button>
      </Stack>
    </Box>
  );
}

/* <form action='#' className='login-form'>
      <input
        type='email'
        placeholder='Email'
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
    </form> */
