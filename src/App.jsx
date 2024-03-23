import { Link, Route, Routes } from "react-router-dom"
import React, { useState } from "react"
import Otp from "./component/authorization/otp"
import Signin from "./component/authorization/signin"
import Signup from "./component/authorization/signup"
import Password from "./component/authorization/forgetpassword"
import Home from "./landingpage"
import './App.css'
import Forgetemail from "./component/authorization/forgetemail"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import Main from "./component/homePage/home"
import Exercies from "./component/exercies"
import Profile from "./component/homePage/profile"
import Task from "./component/Task/task"
import Equipment from "./component/equipment"
import Calculator from "./component/calculator/calculator"
import Setting from "./component/setting"
function App() {
  const [userdatas,setuserdatas]=useState("")
console.log(userdatas)
  return (
    <>
    <Container fluid className="p-0 ">
     <div className="header">
     
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forget" element={<Forgetemail/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/home" element={<Main/>}/>
        <Route path="/exercies" element={<Exercies/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/equipment" element={<Equipment/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/otp/password/:OTP"  element={<Password/>}/>
      </Routes>
     </div>
     </Container>
    </>
  )
}

export default App