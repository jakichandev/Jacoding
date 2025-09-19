import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import RoutingSystem from './routes/RoutingSystem'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutingSystem />
    </ BrowserRouter>
  </StrictMode>,
)
