import React from "react";
import "./style.css"

function ProjectCard({ title, url, pageLink, depLink }){
    
    return(
        <div className="card">
                    <h3>{title}</h3>
                    <img src={url} alt="Screenshot of Project"/>
                <a href={pageLink}>Github Page</a>
                <a href={depLink}>Deployed Site</a>
                   </div>
    )
}

export default ProjectCard;