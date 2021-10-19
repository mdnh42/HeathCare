import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
         <div style={{ marginTop: "100px" }}>
            <Container>
                <h2 className="text-warning text-center mb-5">About</h2>
                <Row className='d-flex align-items-center mb-5'>
                    <Col>
                        <h1>Our Story</h1>
                        <p>
                            Yoga (/ˈjoʊ.ɡə/ (About this soundlisten);[1] Sanskrit: योग, lit. 'yoke' or 'union' pronounced [joːɡɐ]) is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India, aimed at controlling ('yoking') and stilling the mind, and recognizing the detached 'witness-consciousness' as untouched by the activities of the mind (Citta) and mundane suffering (Duḥkha). There are a broad variety of the schools of yoga, practices, and goals[2] in Hinduism, Buddhism, and Jainism,[3][4][5] and traditional forms and modern methods of yoga are practiced worldwide.
                        </p>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <Image src="https://images.unsplash.com/photo-1585154536515-c766bd2a6cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80" fluid width="300px" height="300px" />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-center">
                    <Col>
                        <div className="text-center">
                            <Image src="https://images.unsplash.com/photo-1504505278590-428d1acd0f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=581&q=80" fluid width="300px" height="300px" />
                        </div>

                    </Col>
                    <Col><h1>Our Vision</h1>
                        <p>
                            There are broadly two kinds of theories on the origins of yoga. The linear model argues that yoga has Aryan origins, as reflected in the Vedic textual corpus, and influenced Buddhism; according to Crangle, this model is mainly supported by Hindu scholars. The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                            <br/>
                            The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                            <br/>
                            The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                            <br/>
                            The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                            <br/>
                            The synthesis model argues that yoga is a synthesis of indigenous, non-Aryan practices with Aryan elements; this model is favoured in western scholarship.
                        </p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;