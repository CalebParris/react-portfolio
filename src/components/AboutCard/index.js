import React from "react";
import CardContext from "../../utils/CardContext"
import "./style.css"
import Photo_of_Myself from "../../images/Photo_of_Myself.jpg";
import CalebParris_WebDevResume from "../../PDF/CalebParris_WebDevResume.pdf";

function AboutCard(){
    return(
        <CardContext.Consumer>
            {({ title, textOne, textTwo, textThree, textFour }) => {
                return(
                    <div className="jumbotron card-container">
                    <h2>{title}</h2>
                    <img src={Photo_of_Myself} alt="Self portrait"/>
                   <p>{textOne}</p>
                   <p>{textTwo}</p>
                   <p>{textThree}</p>
                   <p>{textFour} <a href={CalebParris_WebDevResume} target="_blank">Technical Resume</a></p>
                   </div>
                )
            }}
        </CardContext.Consumer>
    )
}

export default AboutCard;