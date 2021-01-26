import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { Card, Text, Input, Button, withStyles } from '@ui-kitten/components';
import { Container, Row, Col } from 'react-bootstrap';
import { styles } from './login.style';

const Login = (props: any) => {
  const style = styles(props);

  const loginSubText = [
    'Duise effe inlogge?',
    'Log maar uns inne dan',
    'Inlogge duise hie',
    'Enne!',
    'Enne, duise effe inlogge?',
  ];

  const getSubText = () => {
    return loginSubText[Math.floor(Math.random() * Math.floor(loginSubText.length))];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row>
          <Card style={style.logoContainer}>
            <Container>
              <Row>
                <Col>
                  <Text category="h4">Concordia App</Text>
                </Col>
                <Col>
                  <Image
                    style={{
                      resizeMode: 'contain',
                      height: 100,
                    }}
                    source={require('../../img/concordia.png')}
                  ></Image>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        <View style={style.loginHeaderContainer}>
          <ImageBackground source={require('../../img/LoginBg.png')}>
            <Text style={style.primaryText} category="h1">
              Welkom
            </Text>
            <Text style={style.loginHeaderSubText} category="s1">
              {getSubText()}
            </Text>
          </ImageBackground>
        </View>
        <View style={style.formContainer}>
          <Input label="Username" status="primary" />
          <Input label="Password" status="primary" />
        </View>
        <View style={style.buttonContainer}>
          <Button status="primary">Login</Button>
        </View>
      </Container>
    </div>
  );
};

export default withStyles(Login);
