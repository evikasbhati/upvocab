import "./inputField.css"
const InputField=(props)=>{
    const {isLabel=true,label,name,type="text",labelColor,labelSize="16px",onChange}=props;
    return(
        <div className="inputFieldContainer">
        {isLabel && <label style={{color:labelColor,fontSize:labelSize}}>{label}</label>}
            <input className="inputField" type={type} placeholder={name} name={name} onChange={onChange} />
        </div>
    )
}
export default InputField