import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from "react";
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Define the listener function that checks specifically for 'signIn'
    const listener = (data) => {
      const { payload } = data;
      if (payload.event === 'signedIn') {
        navigate('/'); // Navigate immediately upon successful sign-in
      }
    };

    // Subscribe to the 'auth' channel and pass the listener function that will redirect when the user is signed in. The AWS Amplify library immediately sets up the event listener and returns a special, unique function designed specifically to tear down that exact listener later. 
    const unsubscribe = Hub.listen('auth', listener);

    // Return the cleanup function required by useEffect. This essentially hands React a function and says, "Call this when you're done with my side effect". The unsubscribe function specifically is provided by the Amplify Hub utiltiy. It contains the necesary internal logic to gracefully disconnect your listener from the Hub's system when the user navigates away from the LoginPage to prevent memory leaks and unexpected behavior. 
    return () => {
      unsubscribe();
    };
  }, [navigate]); // navigate is a stable reference provided by react-router-dom

  // The Authenticator handles all UI logic; you only listen for the outcome.
  return (
    <main style={{ maxWidth: '400px', margin: '0 auto', paddingTop: '4rem' }}>
      <Authenticator />
    </main>
  );
}

export default LoginPage;