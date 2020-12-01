import React from "react";
import "./style.css";
import CardContext from "../../utils/CardContext";

function ContactCard(){
    return(
        <CardContext.Consumer>
            {({ title, textOne, textTwo, textThree, textFour }) => {
                return(
                    <div className="jumbotron card-container">
                    <h2>{title}</h2>
                   <p className="beginning">{textOne}</p>
                   <p>{textTwo} <a href="https://github.com/CalebParris">github.com/CalebParris</a></p>
                   <p>{textThree} <a href="https://www.linkedin.com/in/calebparris/">linkedin.com/in/calebparris/</a></p>
                   <p>{textFour} <a href="mailto:calebparris@live.com">calebparris@live.com</a></p>
                   </div>
                )
            }}
        </CardContext.Consumer>
    )
}

export default ContactCard;