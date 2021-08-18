import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./contexts/PlayerContext";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById('root')
);
