"use client"
import InputField from "@/components/inputField/InputField"
import "./login.css"
import Buttton from "@/components/button/Button"
import { useState } from "react"
const Login=()=>{

    const [input,setInput]=useState({
        username:"",
        email:"",
        password:""
    })
    const handleLogin=()=>{
        console.log("login",input)
    }
    const handleInput=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    
    return(
        <>
        <div className="loginContainer">
            <InputField label="Username or email" name="username" onChange={handleInput} />
            <InputField label="Password" name="password" type="password" onChange={handleInput} />
            <Buttton title="Login" handleClick={handleLogin}/>
        </div>
        </>
    )
}
export default Login;