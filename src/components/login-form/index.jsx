/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  submitForm,
  setSignUp,
}) {
  function handleSubmitForm(e) {
    e.preventDefault();
    submitForm();
  }

  function handleClickSignUp() {
    setSignUp(true);
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

      <Stack mt={1.5} spacing={2} direction='row'>
        <Button type='submit' sx={{ mt: 2 }} variant='contained'>
          Войти
        </Button>
        <Button onClick={handleClickSignUp} variant='outlined'>
          Регистрация
        </Button>
      </Stack>
    </Box>
  );
}
