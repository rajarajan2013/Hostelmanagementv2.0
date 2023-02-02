import {BrowserRouter, Route,Routes } from 'react-router-dom'

//pages
import Forgot from './pages/authentication/forgot'
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup'
import Bookingrep from "./pages/dashboard/bookingrep"
import Report from "./pages/dashboard/masterrep"
import Home from "./pages/dashboard/home"
import Attendance from './pages/dashboard/attendancerep'
import Trial from './pages/dashboard/trial'

function App () {
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotpassword" element={<Forgot/>} />
            <Route path="/bookingrep" element={<Bookingrep/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/attendance" element={<Attendance/>} />
            <Route path="trial" element={<Trial/>} />
          </Routes>
        </BrowserRouter>  
  )
}

export default App;