import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { cookieUtils } from './utils/cookieUtils.js'

// Config axios 
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${cookieUtils.cookieExists('token') ? cookieUtils.getCookie('token') : ""}`
axios.defaults.headers.post['Content-Type'] = 'application/json';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
