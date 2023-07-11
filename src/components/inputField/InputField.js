
const InputField=(props)=>{
    const {isLabel,name,type}=props;
    return(
        <>
        {isLabel && <label className="labelItem">{name}</label>}
            <input className="signupInput" type={type} placeholder={name} name={name} />
        </>
    )
}
export default InputField