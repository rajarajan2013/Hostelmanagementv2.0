import Forgot from './pages/forgot'
import Login from './pages/login'
import Signup from './pages/signup'
// import Superadmin from './pages/superadmin'
// import Hostel from './pages/hostel'
// import Header from './components/header'
// import Nav from './components/navbar'
//import Home from "./pages/home"
//import Attendance from "./pages/attendance"
import Fee from "./pages/fee"
//import rooms from "./pages/rooms"
import Report from "./pages/report"
import {BrowserRouter, Route,Routes  } from 'react-router-dom'

function App () {
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotpassword" element={<Forgot/>} />
            <Route path="/fee" element={<Fee/>} />
            <Route path="/report" element={<Report/>} />
          </Routes>
        </BrowserRouter>  
  )
}

export default App;