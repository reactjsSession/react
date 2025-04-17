import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './component/errorbound/ErrorBoundryComp.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <AuthProvider> 
    <App />
    </AuthProvider>
  </ErrorBoundary>,
)
