import Forgot from './pages/forgot'
import Login from './pages/login'
import Signup from './pages/signup'
import Superadmin from './pages/superadmin'
import Hostel from './pages/hostel'
import Header from './components/header'
import Nav from './components/navbar'
import { Route,Routes } from 'react-router-dom'

function App () {
      return(
        <div>
          <Login/>
          <Signup/>
          <Forgot/>
        </div>
  )
}

export default App;