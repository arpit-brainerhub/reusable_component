import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getUser} from '../constants/StorageUtils';
import {SplashScreenStyles} from '../styles/SplashScreenStyles';

export default class SplashScreen extends Component {
  navigateToHome = () => {
    this.props.navigation.replace('Home');
  };

  navigateToSignin = () => {
    this.props.navigation.replace('SignIn');
  };

  componentDidMount() {
    getUser().then(user => {
      if (user.isLoggedIn === 'true') {
        this.navigateToHome(user.firstName);
      } else {
        this.navigateToSignin();
      }
    });
  }

  render() {
    return (
      <View style={SplashScreenStyles.container}>
        <Text style={SplashScreenStyles.titleTextStyle}>Splash Screen</Text>
      </View>
    );
  }
}
