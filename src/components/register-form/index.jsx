/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function RegisterForm({
  email,
  password,
  name,
  setEmail,
  setPassword,
  setName,
  submitForm,
  setSignUp,
}) {
  function handleSubmitForm(e) {
    e.preventDefault();
    submitForm();
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
      <h3>Регистрация аккаунта</h3>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        label='Ваш еmail:'
        variant='standard'
        margin='dense'
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        type='password'
        label='Ваш пароль'
        variant='standard'
        margin='dense'
      />
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        label='Ваше имя'
        variant='standard'
        margin='dense'
      />

      <Stack mt={1.5} spacing={2} direction='row'>
        <Button type='submit' sx={{ mt: 2 }} variant='contained'>
          Создать аккаунт
        </Button>
        <Button onClick={() => setSignUp(false)} variant='outlined'>
          Уже есть аккаунт
        </Button>
      </Stack>
    </Box>
  );
}
