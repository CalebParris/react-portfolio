import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import CardContext from "../../utils/CardContext"
import AboutCard from "../../components/AboutCard";

function About(){
    const [devState, setDevState] = useState({
        title: "",
        textOne: "",
        textTwo: "",
        textThree: "",
        textFour: "",
    });

    useEffect(() => {
        setDevState({
            title: "About Me",
            textOne: "My name is Caleb Parris, and I am currently a student at the UT Austin Coding Bootcamp. I am expanding my technological skills to include the software side of I.T.",
            textTwo: " I have six years of experience in networking and monitoring support. Currently, I am employed as an IVA support specialist for a tech company. The experience I have gained has sparked an interest in learning the inner workings that are required in creating innovative technology.",
            textThree: "I have always had an interest in software development and I am thrilled to be on this educational journey. I look forward to utilizing the skills I have, new and old, in an environment that is both challenging and encourages advanced critical thinking.",
            textFour: "This link contains an updated copy of my Resume:"
        });
    }, []);

    return(
        <CardContext.Provider value={devState}>
            <div>
                <Container style={{minHeight: "100vh"}}>
                    <Row>
                        <Col size="md-12">
                        <AboutCard title={devState.title} textOne={devState.textOne} textTwo={devState.textTwo} textThree={devState.textThree} textFour={devState.textFour} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </CardContext.Provider>
    )
}

export default About;