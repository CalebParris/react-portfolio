import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import CardContext from "../../utils/CardContext"
import ContactCard from "../../components/ContactCard";

function Contact(){
    const [devState, setDevState] = useState({
        title: "",
        textOne: "",
        textTwo: "",
        textThree: "",
        textFour: "",
    });

    useEffect(() => {
        setDevState({
            title: "Contact Info",
            textOne: "If you would like to contact me, please use one of the following methods:",
            textTwo: "GitHub Profile - ",
            textThree: "LinkedIn Profile - ",
            textFour: "Phone / Email - (432) 934-2795 / "
        });
    }, []);

    return(
        <CardContext.Provider value={devState}>
            <div>
                <Container style={{minHeight: "100vh"}}>
                    <Row>
                        <Col size="md-12">
                        <ContactCard title={devState.title} textOne={devState.textOne} textTwo={devState.textTwo} textThree={devState.textThree} textFour={devState.textFour} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </CardContext.Provider>
    )
}

export default Contact;