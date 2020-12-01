import React from "react";

const CardContext = React.createContext({
    title: "",
    url: "",
    pageLink: "",
    depLink: "",
    textOne: "",
    textTwo: "",
    textThree: "",
    textFour: ""
});

export default CardContext;