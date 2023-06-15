import {BrowserRouter, Route,Routes  } from 'react-router-dom'

//pages
import Forgot from './pages/authentication/forgot'
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup'
import Bookingrep from "./pages/dashboard/bookingrep"
import Home from "./pages/dashboard/home"
import Attendancerep from './pages/dashboard/attendancerep'
import Masterrep from './pages/dashboard/masterrep'
import Customrep from './pages/dashboard/customreport'
import Occupancyrep from './pages/dashboard/occupancyrep'

function App () { 
      return(
        <BrowserRouter>
          <Routes>
            {/* //authentication routes */}
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotpassword" element={<Forgot/>} />
            {/* //Navbar routes */}
            <Route path="/home" element={<Home/>} />
            <Route path="/bookingrep" element={<Bookingrep/>} />
            <Route path="/masterrep" element={<Masterrep/>} />
            <Route path="/customrep" element={<Customrep/>} />
            <Route path="/attendancerep" element={<Attendancerep/>} />
            <Route path="/occupancyrep" element={<Occupancyrep/>} />
          </Routes>
        </BrowserRouter>  
  )
}

export default App;