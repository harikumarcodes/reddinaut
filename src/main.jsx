import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { state, dispatch } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App state={state} dispatch={dispatch} />
  </StrictMode>,
)
