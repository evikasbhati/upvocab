import "./inputField.css"
const InputField=(props)=>{
    const {isLabel=true,name,type="text",labelColor,labelSize="16px"}=props;
    return(
        <div className="inputFieldContainer">
        {isLabel && <label style={{color:labelColor,fontSize:labelSize}}>{name}</label>}
            <input className="inputField" type={type} placeholder={name} name={name} />
        </div>
    )
}
export default InputField