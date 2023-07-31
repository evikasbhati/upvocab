'use client'

import { Box, Typography } from "@mui/material";
// import "./card.css"
const InCard=(props)=>{

    const {width="120px",inStyle,height="60px",justifyContent="left", title,onClick,background,titleType,borderRadius,textColor}=props;
    const style={
        display:"flex",
        justifyContent:justifyContent,
        alignItems:"center",
        minWidth:width,
        width:"max-content",
        height:height,
        padding:"10px 20px",
        backgroundColor:background,
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius:borderRadius,
        cursor:"pointer",
        ...inStyle,
    }
    return(
        <>
        <Box sx={style} onClick={onClick}>
            <Typography variant={titleType} color={textColor} >{title}</Typography>
        </Box>
        </>
    )
}
export default InCard;