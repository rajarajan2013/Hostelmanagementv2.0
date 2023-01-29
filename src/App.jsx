import {BrowserRouter, Route,Routes  } from 'react-router-dom'

//pages
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup'
import Forgot from './pages/authentication/forgot'
import Home from './pages/dashboard/home'
import Attendancerep from './pages/dashboard/attendancerep'
import Bookingrep from "./pages/dashboard/bookingrep"
import Masterrep from "./pages/dashboard/masterrep"
import Customrep from "./pages/dashboard/masterrep"
import Rooms from './pages/dashboard/rooms'

function App () {
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotpassword" element={<Forgot/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/attendancerep" element={<Attendancerep/>} />
            <Route path="/bookingrep" element={<Bookingrep/>} />
            <Route path="/masterrep" element={<Masterrep/>} />
            <Route path="/customrep" element={<Customrep/>} />
            <Route path="/rooms" element={<Rooms/>} />
          </Routes>
        </BrowserRouter>  
  )
}

export default App;