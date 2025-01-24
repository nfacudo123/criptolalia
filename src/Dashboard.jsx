import React from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RefreshIcon from '@mui/icons-material/Refresh';
import LanguageSelector from './LanguageSelector';
import GamesIcon from '@mui/icons-material/SportsEsports';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/SupportAgent';
import { useSupabaseClient } from './SupabaseProvider';

function Dashboard({ session }) {
  const { t } = useTranslation();
  const supabase = useSupabaseClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f0f2f5' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', backgroundColor: '#1877f2', padding: '8px', borderRadius: '4px' }}>
            Cryptolalia SAS
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LanguageSelector />
          <Button variant="contained" color="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1877f2' }}>
          {t('welcome')}
        </Typography>
        <IconButton aria-label="refresh" sx={{ color: '#1877f2' }}>
          <RefreshIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
        {t('manage_crypto')}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1877f2', marginBottom: 2 }}>
        {t('wallet_balances')}
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {t('litecoin')}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1877f2' }}>
                0.1234 LTC
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {t('liteoshi')}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1877f2' }}>
                1234567 Liteoshi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {t('colombian_pesos')}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1877f2' }}>
                1,234,567 COP
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {t('usdb_tokens')}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1877f2' }}>
                123.45 USDB
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <GamesIcon sx={{ fontSize: 40, color: '#1877f2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1877f2', marginTop: 1 }}>
              {t('games')}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('access_games')}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <HistoryIcon sx={{ fontSize: 40, color: '#1877f2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1877f2', marginTop: 1 }}>
              {t('transaction_history')}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('view_transactions')}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <SettingsIcon sx={{ fontSize: 40, color: '#1877f2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1877f2', marginTop: 1 }}>
              {t('account_settings')}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('manage_settings')}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <SupportIcon sx={{ fontSize: 40, color: '#1877f2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1877f2', marginTop: 1 }}>
              {t('support')}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('get_support')}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
