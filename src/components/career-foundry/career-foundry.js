import ania from '../../assets/ania-kubow.jpeg';
import cf from '../../assets/careerfoundry.jpeg';
import wesbos from '../../assets/wesbos.jpeg';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import './career-foundry.css';
const CareerFoundry = () => {
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
            <Row className="ml-4">
                <Col>
                    <Card
                        className="shadow"
                        style={{
                            width: '18rem',
                            background: 'white',
                            borderRadius: '5px',
                            height: '23rem',
                            overflow: 'hidden',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={cf}
                            alt="ania-kubow"
                            style={{
                                width: '18rem',
                                height: '10rem',
                                overflow: 'hidden',
                            }}
                        />
                        <Card.Body
                            className="d-flex row"
                            style={{ margin: '5px', overflow: 'hidden' }}
                        >
                            <Card.Title>Ania Kubow</Card.Title>
                            <Card.Text style={{ color: 'black' }}>
                                Projects insprired by Ania Kubow's YouTube
                                channel. Links are included with each project.
                            </Card.Text>
                            <Button
                                className="align-self-end"
                                variant="primary bottom"
                            >
                                Go somewhere
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ width: '400px' }}>
                    <Card
                        className="shadow"
                        style={{
                            width: '18rem',
                            background: 'white',
                            borderRadius: '5px',
                            height: '23rem',
                            overflow: 'hidden',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={cf}
                            style={{
                                width: '18rem',
                                height: '10rem',
                                overflow: 'hidden',
                            }}
                            alt="cf"
                        />
                        <Card.Body
                            className="d-flex row"
                            style={{ margin: '5px', overflow: 'hidden' }}
                        >
                            <Card.Title>Career Foundry</Card.Title>
                            <Card.Text style={{ color: 'black' }}>
                                Projects from the Career Foundry curriculum.
                            </Card.Text>
                            <Button
                                className="align-self-end"
                                variant="primary bottom"
                            >
                                Go somewhere
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ width: '400px' }}>
                    <Card
                        className="shadow"
                        style={{
                            width: '18rem',
                            ackground: 'white',
                            borderRadius: '5px',
                            height: '23rem',
                            overflow: 'hidden',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={cf}
                            style={{
                                width: '18rem',
                                height: '10rem',
                                overflow: 'hidden',
                            }}
                            alt="wesbos"
                        />
                        <Card.Body
                            className="d-flex row"
                            style={{ margin: '5px', overflow: 'hidden' }}
                        >
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text style={{ color: 'black' }}>
                                Projects from Wesbos's Javascript 30 course.
                                Links are included for each project.
                            </Card.Text>
                            <Button
                                className="align-self-end"
                                variant="primary"
                            >
                                Go somewhere
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CareerFoundry;
