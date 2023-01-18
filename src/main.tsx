import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContext from "./Context/ThemeContext";
import DataContext from './Context/DataContext';
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <DataContext>
          <App />
        </DataContext>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
)
