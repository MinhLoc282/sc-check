import React from 'react';

import { useAuth } from '../../hooks/use-auth-client';

function LoggedOut() {
  const { login } = useAuth();

  return (
    <div className="container">
      <button type="button" id="loginButton" onClick={login}>
        Log in
      </button>
    </div>
  );
}

export default LoggedOut;
