import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import ProjectCard from "../../components/ProjectCard"
import LocalHops from "../../images/Portfolio-Local-Hops.png"
import TripPlanner from "../../images/Portfolio-Trip.png"
import BurgerApp from "../../images/Portfolio-Burger.png"
import NoteTaker from "../../images/Portfolio-Note-Taker.png"
import Weather from "../../images/Portfolio-Weather.png"
import Workday from "../../images/Portfolio-Workday.png"
import Future from "../../images/under-construction.jpg"
import "./style.css";


function Portfolio(){
    const projects = [
        {
            "id": 1,
            "title": "Local Hops",
            "url": LocalHops,
            "pageLink": "https://github.com/CalebParris/Local-Hops",
            "depLink": "https://local-texas-hops.herokuapp.com/"

        },
        {
            "id": 2,
            "title": "Trip Planner",
            "url": TripPlanner,
            "pageLink": "https://github.com/CalebParris/Trip-Planner",
            "depLink": "https://calebparris.github.io/Trip-Planner/"
        },
        {
            "id": 3,
            "title": "Burger App",
            "url": BurgerApp,
            "pageLink": "https://github.com/CalebParris/Burger",
            "depLink": "https://obscure-springs-05788.herokuapp.com/"
        },
        {
            "id": 4,
            "title": "Note Taker",
            "url": NoteTaker,
            "pageLink": "https://github.com/CalebParris/Note-Taker",
            "depLink": "https://fathomless-bastion-58794.herokuapp.com/"
        },
        {
            "id": 5,
            "title": "Weather Dashboard",
            "url": Weather,
            "pageLink": "https://github.com/CalebParris/Weather-Dashboard",
            "depLink": "https://calebparris.github.io/Weather-Dashboard/"
        },
        {
            "id": 6,
            "title": "Workday Scheduler",
            "url": Workday,
            "pageLink": "https://github.com/CalebParris/Work-Day-Scheduler",
            "depLink": "https://calebparris.github.io/Work-Day-Scheduler/"
        },
        {
            "id": 7,
            "title": "Future Projects",
            "url": Future,
            "pageLink": "#",
            "depLink": "#"
        }
    ]

    return(
            <div>
                <Container>
                    <Row>
                        
                        {projects.map((project) => {
          return ( <Col size="md-6">
               <ProjectCard key={project.id} title={project.title} url={project.url} pageLink={project.pageLink} depLink={project.depLink}/>
            </Col>
          )
        })}
                        
                    </Row>
                </Container>
            </div>
    )
    
}

export default Portfolio;