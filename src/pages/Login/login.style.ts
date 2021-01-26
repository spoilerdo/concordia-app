import { StyleSheet } from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
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
      width: '80%',
    },

    buttonContainer: {
      marginTop: '5rem',
      margin: 'auto',
      width: '80%',
    },

    primaryText: {
      color: props.eva.theme['color-primary-100'],
    },
  });
