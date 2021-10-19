import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, []);
            return (
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 className="text-center my-5 text-warning" > Our Instructors </h1>
                <p className="text-center my-5 text-secondary"> Break into a new field like information technology or data science. No prior experience necessary to get started. </p>
                <Row xs={2} md={2} lg={4} className="g-3 mb-5 mx-3">
                    {
                        instructors.map(instructor =>
                            <Col>
                                <Card>
                                    <Card.Img className="img-fluid" variant="top" src={instructor.img} style={{ width: "300px", height: "320px" }} />
                                    <Card.Body>
                                        <Card.Title>{instructor.name}</Card.Title>
                                        <div>Address: {instructor.Address}</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                </Row>
            </div>
    );
};

export default Instructors;