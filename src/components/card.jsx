import "./styles/card-container.css"
import {Header} from "./header"
import {Text} from "./text"
import { useState } from "react"
import "./styles/button.css"
import {Data} from "../data/data"



export const Card = () => {
    const [bgColor, setBgColor] = useState('green');

    function toggleColor() {
        if (bgColor === "green") setBgColor('yellow');
        if (bgColor === 'yellow') setBgColor("green");
  }
    const cardStyle = ['card-container', bgColor].join(' ')
    

    return (
        <div className={`${cardStyle}` }>
            <Header/>
            <div className="image-container" ><img src = "image.jpg" alt={Data.title} /></div>
            <Text/>
            <div className="button-container">
            <button className = "but" onClick={toggleColor}>{Data.buttonText}</button>
            </div>
        </div>
    )
}