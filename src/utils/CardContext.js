import React from "react";

const CardContext = React.createContext({
    title: "",
    pageLink: "",
    depLink: "",
    textOne: "",
    textTwo: "",
    textThree: "",
    textFour: ""
});

export default CardContext;