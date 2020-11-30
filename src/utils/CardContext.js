import React from "react";

const CardContext = React.createContext({
    title: "",
    url: "",
    pageLink: "",
    depLink: "",
    text: ""
});

export default CardContext;