import forgot from './pages/forgot'
import login from './pages/login'
import signup from './pages/signup'
import superadmin from './pages/superadmin'
import hostel from './pages/hostel'
import header from './components/header'
import nav from './components/navbar'
import { Route,Routes } from 'react-router-dom'

function App () {
  return(
    <Routes> 
      <Route path="forgot" element={forgot} />
      <Route path="login" element={login}/>
      <Route path="signup" element={signup}/>
    </Routes>
  )
}

