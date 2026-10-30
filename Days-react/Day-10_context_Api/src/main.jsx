
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Context/MyContext.jsx'
import {MyContextProvider} from './Context/MyWebsite.jsx'

createRoot(document.getElementById('root')).render(
 <MyContextProvider > 
   <App/>
  </MyContextProvider>
)
