import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

const supabaseUrl = 'https://kfvnqazivzowhgogkkcu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmdm5xYXppdnpvd2hnb2dra2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2ODAyMDksImV4cCI6MjA1MzI1NjIwOX0.u9Z85ITDp-nkg7sOkI91M1vK5TAeY9KjeTQJZ0kdjkg';

const supabase = createClient(supabaseUrl, supabaseKey);

export function SupabaseProvider({ children }) {
  const [client, setClient] = useState(supabase);

  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabaseClient() {
  return useContext(SupabaseContext);
}
