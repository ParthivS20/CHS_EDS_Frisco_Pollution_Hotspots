import React from 'react';
import ReactDOM from "react-dom/client";
import netlifyIdentity from 'netlify-identity-widget'

import App from './App';

netlifyIdentity.init()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
