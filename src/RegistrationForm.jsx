import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function RegistrationForm({ onToggleForm }) {
  const { t } = useTranslation();

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
      <TextField label={t('username')} variant="outlined" fullWidth />
      <TextField label={t('full_name')} variant="outlined" fullWidth />
      <TextField label={t('email')} variant="outlined" fullWidth type="email" />
      <TextField label={t('password')} variant="outlined" fullWidth type="password" />
      <Button variant="contained" color="primary">
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
