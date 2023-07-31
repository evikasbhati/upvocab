"use client"

import { displayCenter } from "@/style/commonStyle";
import { Box, Typography } from "@mui/material";
import optionsData from "@/data/optionsData";
import selectionNotificationData from "@/data/selectionNotificationData";


const navigatorStyle={
    position: "relative",
        ...displayCenter,
        flexDirection: "column",
        height: "650px",
        backgroundColor: "background.window",
        borderRadius: "90px",
        transitionDuration: "0.7s",
        animationTimingFunction:" ease-in-out",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    }
    const optionContainer={
        display:'grid',
        gridTemplateColumns:"repeat(5,1fr)",
        gridTemplateRows:"repeat(6,1fr)",
        gap:"10px",

    }
    const selectionStyle={
        ...displayCenter,
        width:"60px",
        height:"60px",
        backgroundColor: "background.navigateOption",
        // backgroundColor: "gray",
        borderRadius: "5px",
        color:"white",
        cursor:"pointer",
        
    }
    const selectionNotificationStyle={
        ...displayCenter,
        width:"30px",
        height:"30px",
        borderRadius: "20px",
        color:"white",
        
    }
    const QuestionNavigator=(props)=>{
        const {show}=props;
        
        const navigatorContainer = {
            ...navigatorStyle,
            width: show?"500px": "0px",
        contentVisibility:show?"visible":"hidden",
      };
    return(
        <>
        <Box sx={navigatorContainer} >
            <Box  sx={optionContainer}>
            {optionsData.map((element)=>(
                <Box item key={element.id} sx={selectionStyle}  >
                    <Typography variant="h6" color="white">
                    {element.id}
                    </Typography>
                </Box>
            ))}
            </Box>
            <Box sx={{width:"450px", display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
            {selectionNotificationData.map((element)=>(
                <Box item key={element.id}  sx={{width:"150px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <Box  sx={{backgroundColor:element.color,...selectionNotificationStyle}} />
                    <Typography variant="h6" color="black">
                    {element.title}
                    </Typography>
            </Box>
            ))}
            </Box>
        </Box>
        </>
    )
} 
export default QuestionNavigator