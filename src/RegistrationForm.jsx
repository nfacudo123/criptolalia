import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useSupabaseClient } from './SupabaseProvider';
import Swal from 'sweetalert2';

function RegistrationForm({ onToggleForm }) {
  const { t } = useTranslation();
  const supabase = useSupabaseClient();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            full_name: fullName,
          },
        },
      });
      if (error) {
        console.error('Error registering:', error.message);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
      } else {
        console.log('Registration successful:', data);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Please check your email to verify your account.',
        });
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
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
        {t('register_account')}
      </Typography>
      <TextField label={t('username')} variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label={t('full_name')} variant="outlined" fullWidth value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <TextField label={t('email')} variant="outlined" fullWidth type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label={t('password')} variant="outlined" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        {t('register_button')}
      </Button>
      <Typography variant="body2" align="center" color="textSecondary" mt={1}>
        {t('already_registered')}{' '}
        <Button color="primary" onClick={onToggleForm} sx={{ padding: 0, minWidth: 0, textTransform: 'none' }}>
          {t('sign_in')}
        </Button>
      </Typography>
      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <LanguageSelector />
      </Box>
    </Box>
  );
}

export default RegistrationForm;
