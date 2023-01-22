import './contact.css';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container
            className="border d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(45deg,#131086 ,#b621f3 )',
                height: '90vh',
                width: '90vw',
            }}
            fluid
        >
            <Row>
                <Col>
                    <Form
                        style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '5px',
                            width: '600px',
                            height: '400px',
                        }}
                    >
                        <Form.Group>
                            <h2
                                style={{
                                    color: 'black',
                                    textAlign: 'center',
                                    marginBottom: '30px',
                                }}
                            >
                                Contact me
                            </h2>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>

                        <Button
                            className="center"
                            variant="secondary"
                            size="lg"
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
