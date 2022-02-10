import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getUser} from '../constants/StorageUtils';
import {SplashScreenStyles} from '../styles/SplashScreenStyles';
import * as strings from '../constants/StringConstants';

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
        <Text style={SplashScreenStyles.titleTextStyle}>
          {strings.splashScreen}
        </Text>
      </View>
    );
  }
}
