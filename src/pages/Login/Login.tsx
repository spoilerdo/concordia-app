import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import { Card, Text, Input, Button, withStyles } from '@ui-kitten/components';
import { Container, Row, Col } from 'react-bootstrap';

const Login = (props: any) => {
  const styles = StyleSheet.create({
    logoContainer: {
      width: '100vw',
      textAlign: 'center',
    },

    logo: {
      width: '100px',
    },

    loginHeaderContainer: {
      marginTop: '2rem',
      textAlign: 'center',
    },

    loginHeaderSubText: {
      paddingBottom: '7px',
    },

    formContainer: {
      marginTop: '5rem',
      margin: 'auto',
      width: '60%',
    },

    buttonContainer: {
      marginTop: '5rem',
      margin: 'auto',
      width: '60%',
    },

    primaryText: {
      color: props.eva.theme['color-primary-100'],
    },
  });

  const loginSubText = [
    'Duise effe inlogge?',
    'Log maar uns inne dan',
    'Inlogge duise hie',
    'Enne!',
    'Enne, duise effe inlogge?',
  ];

  const getSubText = () => {
    return loginSubText[Math.floor(Math.random() * loginSubText.length)];
  };

  return (
    <div>
      <Container>
        <Row>
          <Card style={styles.logoContainer}>
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
        <View style={styles.loginHeaderContainer}>
          <ImageBackground source={require('../../img/LoginBg.png')}>
            <Text style={styles.primaryText} category="h1">
              Heyy enne!!
            </Text>
            <Text style={styles.loginHeaderSubText} category="s1">{getSubText()}</Text>
          </ImageBackground>
        </View>
        <View style={styles.formContainer}>
          <Input label="Username" status="primary" />
          <Input label="Password" status="primary" />
        </View>
        <View style={styles.buttonContainer}>
          <Button status="primary">Login</Button>
        </View>
      </Container>
    </div>
  );
};

export default withStyles(Login);
