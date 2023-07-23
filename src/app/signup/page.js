"use client"
import InputField from "@/components/inputField/InputField"
import "./signup.css"
import Buttton from "@/components/button/Button"
import { useState } from "react"
const Signup=()=>{

    const [input,setInput]=useState({
        username:"",
        email:"",
        password:""
    })

    const emotions = {
        "Joy": ["Delight", "Elation", "Bliss"],
        "Sadness": ["Grief", "Despair", "Melancholy"],
        "Anger": ["Rage", "Wrath", "Frustration"],
        "Fear": ["Terror", "Dread", "Anxiety"],
        "Surprise": ["Astonishment", "Bewilderment", "Shock"],
        "Disgust": ["Revulsion", "Repulsion", "Disdain"],
        "Love": ["Affection", "Adoration", "Devotion"],
        "Happiness": ["Contentment", "Pleasure", "Satisfaction"],
        "Excitement": ["Thrill", "Anticipation", "Eager"],
        "Anxiety": ["Worry", "Nervousness", "Unease"],
        "Guilt": ["Remorse", "Regret", "Shame"],
        "Shame": ["Humiliation", "Embarrassment", "Mortification"],
        "Jealousy": ["Envy", "Covetousness", "Resentment"],
        "Envy": ["Jealousy", "Desire", "Longing"],
        "Pride": ["Arrogance", "Confidence", "Self-esteem"],
        "Curiosity": ["Interest", "Inquisitiveness", "Wonder"],
        "Confusion": ["Perplexity", "Bewilderment", "Disorientation"],
        "Relief": ["Relaxation", "Comfort", "Ease"],
        "Frustration": ["Irritation", "Impatience", "Disappointment"],
        "Empathy": ["Compassion", "Understanding", "Sympathy"],
        "Compassion": ["Kindness", "Mercy", "Empathy"],
        "Gratitude": ["Thankfulness", "Appreciation", "Recognition"],
        "Grief": ["Sorrow", "Mourning", "Heartache"],
        "Hope": ["Optimism", "Expectation", "Anticipation"],
        "Awe": ["Wonder", "Astonishment", "Reverence"],
        "Contentment": ["Satisfaction", "Fulfillment", "Serenity"],
        "Irritation": ["Annoyance", "Impatience", "Aggravation"],
        "Loneliness": ["Isolation", "Solitude", "Abandonment"],
        "Insecurity": ["Doubt", "Uncertainty", "Self-doubt"],
        "Determination": ["Perseverance", "Resolve", "Persistence"]
      };
      
      const emotionsArray = Object.values(emotions);

      const handleSignUp=()=>{
          console.log("signUp",input)
          const emp=[]
          for (let i=0;i<emotionsArray.length;i++){
            emp.push(...emotionsArray[i])
          }
          console.log(emp);
    }
    const handleInput=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    return(
        <>
        <div className="signupContainer">
            <InputField label="Username" name="username" onChange={handleInput} />
            <InputField label="Email" name="email" type="email" onChange={handleInput} />
            <InputField label="Password" name="password" type="password" onChange={handleInput} />
            <Buttton title="Sign Up" handleClick={handleSignUp}/>
        </div>
        </>
    )
}
export default Signup