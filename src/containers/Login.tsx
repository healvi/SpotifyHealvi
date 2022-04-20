import React from 'react';
import { urlGet } from '../utils/spotifyconf';

const Login = () => (
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <a data-testid="button-login" href={urlGet} className="btn btn-danger">
      Anda Belum Login, Klik Untuk Login
    </a>
  </div>
);

export default Login;
