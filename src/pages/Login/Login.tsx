import React, { Component } from "react";
import { Card, Text, Input, Button } from '@ui-kitten/components';
import { Container, Row, Col } from 'react-bootstrap';

import concordia from '../../img/concordia.png';

class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Card>
                            <Container>
                                <Row>
                                    <Col>
                                        <Text category='h4'>Concordia App</Text>
                                    </Col>
                                    <Col>
                                        <img src={concordia} alt="Concordia"></img>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Row>
                    <Row>
                        <div>
                            <Text category='h1'>Heyy enne!!</Text>
                            <Text category='s1'>Duise effe inlogge?</Text>
                        </div>
                        <Input
                            label='Username'
                            status='primary'
                        />
                        <Input
                            label='Password'
                            status='primary'
                        />
                    </Row>
                    <Row>
                        <Button status='primary'>
                            Login
                        </Button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;