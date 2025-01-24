import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSupabaseClient } from './SupabaseProvider';

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const { t } = useTranslation();
  const [session, setSession] = useState(null);
  const supabase = useSupabaseClient();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [supabase]);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Container maxWidth="lg">
      {session ? (
        <Dashboard session={session} />
      ) : (
        <>
          {isRegistering ? (
            <RegistrationForm onToggleForm={toggleForm} />
          ) : (
            <LoginForm onToggleForm={toggleForm} />
          )}
        </>
      )}
    </Container>
  );
}

export default App;
