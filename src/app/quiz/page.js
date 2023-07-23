"use client"
import Card from "@/components/card/Card";
import { emotions } from "@/data/emotionsData";
import { emotionsMeaning } from "@/data/wordsMeaning";
import "./quiz.css"
import { useState } from "react";

const Quiz=()=>{

    const [questionObj,setQuestionObj]=useState("")

    const quizOptions=(data,answer,max,min)=>{
        const tempSet=new Set()
        tempSet.add({sol:answer,color:"blue"})
        while(tempSet.size<4){
            let num=Math.floor(Math.random()*(max-min+1))+min;
            let value=data[num]
            tempSet.add({sol:value,color:"blue"})
        }
        // console.log([...tempSet])
        return [...tempSet]
    }
    const randomQuestion=(max,min)=>{
        let num=Math.floor(Math.random()*(max-min+1))+min;
        let word=emotions[num];
        let mean=emotionsMeaning[word];
        let options=quizOptions(emotions,word,max,min);
        const queObj={
            word:word,
            mean:mean,
            options:options,
        }
        return queObj
    }

    const checkOption=(index,option,answer)=>{
        console.log(index)
        if(option===answer){
            setQuestionObj({
                ...questionObj,
                [questionObj.options[index].color]:"green"}
                )
                console.log("correct",questionObj)
            }else{
                setQuestionObj({...questionObj,
                    [questionObj.options[index].color]:"red"}
                    )
            console.log("wrong")
        }

    }
    
    const handleNext=()=>{
        setQuestionObj(randomQuestion(29,0))
    }
    return(
        <div className="quizContainer">
            <h2>{questionObj.mean}</h2>
            <div className="optionsBlock">
                {
                    questionObj?.options?.map((option,index)=>(
                        <Card key={option.sol} title={option.sol} background={option.color} onClick={()=>checkOption(index,option.sol,questionObj.word)}/>
                    ))
                }
            </div>
             <button onClick={handleNext} >random</button>
        </div>
    )
}
export default Quiz;