"use client"
import InputField from "@/components/inputField/InputField"
import "./signup.css"
import Buttton from "@/components/button/Button"
const Signup=()=>{

    const handleSignUp=()=>{
        console.log("signUp")
    }
    return(
        <>
        <div className="signupContainer">
            <InputField name="Username" />
            <InputField name="Email" type="email"/>
            <InputField name="Password" type="password" />
            <Buttton title="Sign Up" handleClick={handleSignUp}/>
        </div>
        </>
    )
}
export default Signup