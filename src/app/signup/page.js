import "./signup.css"
const Signup=()=>{
    return(
        <>
        <div className="signupContainer">
            <label className="labelItem">username</label>
            <input className="signupInput" type="text" placeholder="username" name="username" />
            <label className="labelItem">email</label>
            <input className="signupInput" type="text" placeholder="email" name="email" />
            <label className="labelItem">password</label>
            <input className="signupInput" type="text" placeholder="password" name="password" />
        </div>
        </>
    )
}
export default Signup