import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Home onStartMatching={function (): void {
      throw new Error('Function not implemented.')
    } }/> */}
    <App/>
  </StrictMode>,
)
