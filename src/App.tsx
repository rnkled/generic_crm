import GlobalStyle from "./GlobalStyle"
import Layout from "./Pages/Layout";
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ErrorPage from './Pages/Error';
import Dashboard from "./Components/Dashboard";
import People from "./Components/People";
import Finances from "./Components/Finances";
function App() {
  return (<>
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout/>} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="people" element={<People />} />
        <Route path="finances" element={<Finances />}/>
      </Route>
    </Routes>
    <GlobalStyle />
  </>
  )
}

export default App
