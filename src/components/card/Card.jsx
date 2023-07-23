import "./card.css"
const Card=(props)=>{
    const {width="200px",height="50px",title,onClick,background="blue"}=props;
    return(
        <>
        <div className="cardContainer" style={{width:width,height:height,background:background}} onClick={onClick}>
            <h3 style={{color:"black"}}>{title}</h3>
        </div>
        </>
    )
}
export default Card;