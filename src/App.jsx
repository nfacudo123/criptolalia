import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const { t } = useTranslation();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Container maxWidth="sm">
      {isRegistering ? (
        <RegistrationForm onToggleForm={toggleForm} />
      ) : (
        <LoginForm onToggleForm={toggleForm} />
      )}
    </Container>
  );
}

export default App;
