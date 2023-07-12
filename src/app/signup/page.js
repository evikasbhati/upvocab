"use client"
import InputField from "@/components/inputField/InputField"
import "./signup.css"
import Buttton from "@/components/button/Button"
import { useState } from "react"
const Signup=()=>{

    const [input,setInput]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleSignUp=()=>{
        console.log("signUp",input)
    }
    const handleInput=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    return(
        <>
        <div className="signupContainer">
            <InputField label="Username" name="username" onChange={handleInput} />
            <InputField label="Email" name="email" type="email" onChange={handleInput} />
            <InputField label="Password" name="password" type="password" onChange={handleInput} />
            <Buttton title="Sign Up" handleClick={handleSignUp}/>
        </div>
        </>
    )
}
export default Signup