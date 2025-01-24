import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useSupabaseClient } from './SupabaseProvider';
import Swal from 'sweetalert2';

function LoginForm({ onToggleForm }) {
  const { t } = useTranslation();
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error('Error logging in:', error.message);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      } else {
        console.log('Login successful:', data);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are now logged in!',
        });
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" color="primary">
        {t('cryptolalia')}
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" mb={2}>
        {t('login_account')}
      </Typography>
      <TextField label={t('email')} variant="outlined" fullWidth type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label={t('password')} variant="outlined" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        {t('sign_in')}
      </Button>
      <Typography variant="body2" align="center" color="textSecondary" mt={1}>
        {t('not_registered')}{' '}
        <Button color="primary" onClick={onToggleForm} sx={{ padding: 0, minWidth: 0, textTransform: 'none' }}>
          {t('register')}
        </Button>
      </Typography>
      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <LanguageSelector />
      </Box>
    </Box>
  );
}

export default LoginForm;
