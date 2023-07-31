"use client";

import "./quiz.css";
import { Box, Typography } from "@mui/material";
import { displayCenter } from "@/style/commonStyle";
import InCard from "@/components/inCard/InCard";
import Quadrant from "@/components/quadrant/Quadrant";
import InButtton from "@/components/inButton/InButton";
import QuestionNavigator from "@/components/questionNavigator/QuestionNavigator";
import { useState } from "react";

const pageContainer = {
  ...displayCenter,
  width: "100%",
  height: "700px",
  justifyContent: "space-evenly",
  backgroundColor: "background.main",
};
const windowContainer = {
  position: "relative",
  ...displayCenter,
  flexDirection: "column",
  width: "1000px",
  height: "650px",
  backgroundColor: "background.window",
  borderRadius: "90px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
};

const queContainerStyle = {
  ...displayCenter,
  justifyContent: "left",
  alignItems: "flex-Start",
  flexDirection: "column",
  width: "90%",
  padding: "50px",
};
const questionBox = {
  ...displayCenter,
  justifyContent: "left",
  alignItems: "flex Start",
  width: "100%",
  height: "fit-content",
  padding: "20px",
  boxSizing: "border-box",
  borderRadius: "20px",
  backgroundColor: "background.main",
};
const choiceContainer = {
  ...displayCenter,
  width: "100%",
};
const optionBox = {
  height: "300px",
  ...displayCenter,
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "space-evenly",
  flex: 2,
};

const navigationContainerStyle = {
  ...displayCenter,
  position: "absolute",
  right: "5px",
  height: "120px",
  justifyContent: "right",
  flexDirection: "column",
  justifyContent: "space-evenly",
  flex: 1,
};
const cardStyle = {
  height: "40px",
  background: "background.option",
  borderRadius: "10px",
};
const Quiz = () => {

  const [navigate,setNavigte]=useState(false);
  // const quizOptions=(data,answer,max,min)=>{
  //     const tempSet=new Set()
  //     tempSet.add()
  //     while(tempSet.size<4){
  //         let num=Math.floor(Math.random()*(max-min+1))+min;
  //         let value=data[num]
  //         tempSet.add()
  //     }
  //     return [...tempSet]
  // }

  const handleNavigate=()=>{
    setNavigte(!navigate)

  }

  return (
    <>
      <Box sx={pageContainer}>
        <Box sx={windowContainer}>
          <Quadrant
            title="Q1"
            titleType="h5"
            background="#36357a"
            justifyContent="flex-start"
            borderRadius="0 0 100%  0"
            position="absolute"
            top="0px"
            left="0px"
          />
          <Quadrant
            title="30:00"
            titleType="h5"
            background="alert.main"
            justifyContent="flex-end"
            borderRadius="0 0 0 100% "
            position="absolute"
            top="0px"
            right="0px"
          />
          <Box sx={queContainerStyle}>
            <Box sx={questionBox}>
              <Typography variant="h5">
                Q. How many bones are there in human body?
              </Typography>
            </Box>
            <Box sx={choiceContainer}>
              <Box sx={optionBox}>
                <InCard
                  title="Option"
                  titleType="h6"
                  background="background.option"
                  inStyle={cardStyle}
                  textColor="font.main"
                  />
                <InCard
                  title="Option,bhjfvjkjkdsfnj"
                  titleType="h6"
                  background="background.option"
                  inStyle={cardStyle}
                  textColor="font.main"
                  />
                <InCard
                  title="Option soemfemhto lkjljsflfsjklkj"
                  titleType="h6"
                  background="background.option"
                  inStyle={cardStyle}
                  textColor="font.main"
                  />
                <InCard
                  title="Option"
                  titleType="h6"
                  background="background.option"
                  inStyle={cardStyle}
                  textColor="white"
                />
              </Box>
              <Box sx={navigationContainerStyle}>
                <InButtton
                  title="Clear"
                  titleStyle="h6"
                  background="background.clear"
                  color="black"
                  padding="18px 2px"
                  width="100px"
                  height="45px"
                  borderRadius="5px"
                />
                <InButtton
                  title="Navigate"
                  titleStyle="h6"
                  handleClick={handleNavigate}
                  background="background.navigate"
                  color="black"
                  padding="18px 2px"
                  width="100px"
                  height="45px"
                  borderRadius="5px"
                />
              </Box>
            </Box>
          </Box>
          <Quadrant
            title="Next"
            titleType="h5"
            background="background.option"
            size="100px"
            justifyContent="flex-end"
            borderRadius="100% 0 0 0"
            position="absolute"
            bottom="0px"
            right="0px"
            cursor="pointer"
            isTransform
          />
          <Quadrant
            title="Previous"
            titleType="h6"
            size="100px"
            justifyContent="flex-start"
            background="background.option"
            borderRadius="0 100% 0 0"
            position="absolute"
            bottom="0px"
            left="0px"
            cursor="pointer"
            isTransform
          />
        </Box>
      <QuestionNavigator show={navigate} />
      </Box>
    </>
  );
};
export default Quiz;
