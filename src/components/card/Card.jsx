import "./card.css"
const Card=(props)=>{
    const {width="200px",height="50px",title}=props;
    return(
        <>
        <div className="cardContainer" style={{width:width,height:height}}>
            <h3 style={{color:"black"}}>{title}</h3>
        </div>
        </>
    )
}
export default Card;