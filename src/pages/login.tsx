import { useState } from 'react';

import Input from '../components/Input';
import MetaTitle from '../components/MetaTitle';

import { FormModeSelector, LoginContainer, LoginForm } from '../styles/pages/login';

function Login() {

  const [formMode, setFormMode] = useState<'login' | 'signup'>('login');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <LoginContainer>
      <MetaTitle page="login" />

      <main className="login-main">
        <header className="page-header">

          <h1>Planance</h1>

          <span>Finance Planner</span>
        </header>

        <LoginForm>

          <FormModeSelector>
            <div className={`${formMode === 'login' ? 'to-left' : 'to-right'} highlight-zone`} />
            <button
              type="button"
              className={`${formMode === 'login' ? 'active' : 'inactive'}`}
              onClick={() => setFormMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`${formMode === 'signup' ? 'active' : 'inactive'}`}
              onClick={() => setFormMode('signup')}
            >
              Signup
            </button>
          </FormModeSelector>

          {formMode === 'signup' && (
            <Input
              label="Name"
              value={userName}
              type="text"
              valueSetter={setUserName}
              placeholder="Angela Smith"
            />
          )}

          <Input
            label="Email"
            value={userEmail}
            type="email"
            valueSetter={setUserEmail}
            placeholder="smithangela@mail.com"
          />
          <Input
            label="Password"
            value={userPassword}
            type="password"
            valueSetter={setUserPassword}
            placeholder="●●●●●●●●●●●●●"
          />

          <button type="submit" className="submit-button">
            {formMode === 'login' && 'Login'}
            {formMode === 'signup' && 'Signup'}
          </button>

          {formMode === 'login' && (

            <a href="/#" className="forgot-password">
              Forgot Password?
            </a>
          )}

        </LoginForm>
      </main>
    </LoginContainer>
  );
}

export default Login;
