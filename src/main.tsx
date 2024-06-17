import React from 'react'
import ReactDOM from 'react-dom/client'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App.tsx'
import './index.css'

console.warn(
  '%c=== WARNING ===\n\n%cPlease do not open or interact with the console unless you know what you are doing. If someone instructed you to open the console, they may be attempting to hack or steal your data. \n\nThis project was made using Redo React-Kit.',
  'color: red; font-size: 20px; font-weight: bold;',
  'color: white; font-size: 16px; font-weight: bold;'
);



if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}





ReactDOM.createRoot(document.getElementById('redo-react-kit')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
