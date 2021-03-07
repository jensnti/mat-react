import './SignIn.scss';

import React, { useState } from 'react';

import AuthService from '../services/auth-service';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    setLoading(true);
    AuthService.signUp(email, password, confirmPassword).then(
      () => {
        setLoading(false);
        props.history.push('/');
        window.location.reload();
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
    //   () => {
    //     props.history.push('/profile');
    //     window.location.reload();
    //   },
    //   (error) => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     setMessage(resMessage);
    //   }
  };

  return (
    <div className="text-center h-100 d-flex align-items-center">
      <form className="form-signin" onSubmit={handleSignUp}>
        <h1 className="h3 mb-3">Sign up</h1>
        <div className="mb-3">
          <label htmlFor="email" className="visually-hidden">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control up-pwd"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="visually-hidden">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="form-control up-conf-pwd"
            placeholder="Confirm Password"
            name="confirm-password"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            required
          />
        </div>
        <button className="w-100 btn btn-light text-primary" disabled={loading}>
          {loading && (
            <span className="d-flex align-items-center justify-content-center">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"></span>{' '}
              Loading...
            </span>
          )}
          {!loading && <span>Sign up</span>}
        </button>
      </form>
    </div>
  );
}

export default SignUp;