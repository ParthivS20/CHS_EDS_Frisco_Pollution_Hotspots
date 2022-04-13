import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import netlifyIdentity from 'netlify-identity-widget'


netlifyIdentity.init()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
