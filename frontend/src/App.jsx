import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Manageusers from './pages/admin/Manageusers'
import createtask from './pages/admin/createtask'
import dashboard from './pages/admin/dashboard'
import managetask from './pages/admin/managetask'
import PrivateRoute from './routes/PrivateRoute'
const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path = "/login" element = {<Login/>}></Route>
    <Route path = "/signup" element = {<Signup/>}></Route>
    {/* admin routes here */}
    <Route element = {<PrivateRoute allowedRoles = {["admin"]}/>}>
    <Route path='/admin/dashboard' element = {<dashboard/>}/> 
    <Route path='/admin/tasks' element = {<managetask/>}/> 
    <Route path='/admin/users' element = {<Manageusers/>}/> 
    <Route path='/admin/createtask' element = {<createtask/>}/> 
    </Route>
    {/* user routes here */}
     <Route element = {<PrivateRoute allowedRoles = {["user"]}/>}>
    <Route path='/user/dashboard' element = {<dashboard/>}/> 
    <Route path='/user/tasks' element = {<managetask/>}/> 
    <Route path='/user/users' element = {<Manageusers/>}/> 
    <Route path='/user/createtask' element = {<createtask/>}/> 
    </Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App