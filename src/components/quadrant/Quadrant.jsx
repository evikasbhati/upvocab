'use client'

import { Box, Typography } from "@mui/material";
const Quadrant=(props)=>{

    const {size="80px",title,onClick,background,titleType,justifyContent="center", borderRadius,top,right,left,bottom,cursor,isTransform}=props;

    const transform="scale(1.1,1.1)"	
    const style={
        display:"flex",
        justifyContent:justifyContent,
        alignItems:"center",
        width:size,
        height:size,
        padding:"5px",
        backgroundColor:background,
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius:borderRadius,
        position:"absolute",
        top:top,
        right:right,
        left:left,
        bottom:bottom,
        cursor:cursor,
        "&:hover":{
            transform:isTransform?transform:"",
            transitionDuration: "0.5s",
            animationTimingFunction:" ease-in-out"
        }
    }
    return(
        <>
        <Box sx={style} onClick={onClick}>
            <Typography variant={titleType} color="white" >{title}</Typography>
        </Box>
        </>
    )
}
export default Quadrant;