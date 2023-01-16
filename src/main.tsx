import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContext from "./Context/ThemeContext";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
)
