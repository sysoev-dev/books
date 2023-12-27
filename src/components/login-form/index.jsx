import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LoginForm() {
  return (
    <Box
      component='form'
      mt={5}
      sx={{
        width: 300,
        margin: '0 auto',
      }}
      noValidate
      autoComplete='off'
    >
      <Typography
        align='center'
        id='modal-modal-title'
        variant='h6'
        component='h3'
      >
        Вход
      </Typography>
      <TextField
        sx={{ marginBottom: 0.5 }}
        fullWidth
        id='standard-basic'
        label='Логин:'
        variant='standard'
      />
      <TextField
        fullWidth
        id='outlined-password-input'
        label='Пароль'
        type='password'
        autoComplete='current-password'
        variant='standard'
      />

      <Stack mt={2} spacing={2} justifyContent={'center'} direction='row'>
        <Button variant='contained'>Войти</Button>
        <Button variant='outlined'>Регистрация</Button>
      </Stack>
    </Box>
  );
}
