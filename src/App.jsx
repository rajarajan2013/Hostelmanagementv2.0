import forgot from './components/authentication/forgot'
import login from './components/authentication/login'
import signup from './components/authentication/signup'
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

