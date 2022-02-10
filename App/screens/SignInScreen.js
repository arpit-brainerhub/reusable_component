import React, {Component} from 'react';
import {Alert, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../components/CommonButton';
import {SignInScreenStyles} from '../styles/SignInScreenStyles';
import TextInputComponent from '../components/TextInputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getUser, storeUser} from '../constants/StorageUtils';
import {colors} from '../theme/colors';
import * as strings from '../constants/StringConstants';
import * as constants from '../constants/Constants';

export default class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      isPasswordHidden: true,
      email: '',
      password: '',
      isLoading: false,
    };
  }

  toggleShowPassword = () => {
    this.setState({
      isPasswordHidden: !this.state.isPasswordHidden,
    });
  };

  setLoading = bool => {
    this.setState({
      isLoading: bool,
    });
  };

  validateFields = () => {
    const {email, password} = this.state;
    if (email.length <= 0 || password.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  signin = () => {
    if (this.validateFields()) {
      this.setLoading(true);
      setTimeout(() => {
        this.setLoading(false);
        getUser().then(user => {
          if (
            this.state.email === user.email &&
            this.state.password === user.password
          ) {
            user.isLoggedIn = 'true';
            console.log(user);
            storeUser(user).then(this.navigateToHome());
            getUser();
          } else {
            Alert.alert('', strings.invalidCredentialsTryAgain);
          }
        });
      }, 2000);
    } else {
      Alert.alert('', strings.enterAllFields);
    }
  };

  navigateToSignup = () => {
    this.props.navigation.replace('SignUp');
  };

  navigateToHome = () => {
    this.props.navigation.replace('Home');
  };

  setEmail = value => {
    this.setState({
      email: value,
    });
  };

  setPassword = value => {
    this.setState({
      password: value,
    });
  };

  render() {
    return (
      <LinearGradient
        colors={[
          colors.signinLinearStart,
          colors.signinLinearMid,
          colors.signinLinearEnd,
        ]}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={SignInScreenStyles.gradientstyle}>
        <KeyboardAwareScrollView>
          <View style={SignInScreenStyles.container}>
            <Text style={SignInScreenStyles.titleTextStyle}>
              {strings.signin}
            </Text>
            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.email}
              onChangeText={this.setEmail}
              placeholder={strings.emailPlaceHolder}
              leftIcon={constants.emailIcon}
            />
            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.password}
              onChangeText={this.setPassword}
              placeholder={strings.passwordPlaceHolder}
              leftIcon={constants.passwordIcon}
              isPasswordInput={true}
              isPasswordHidden={this.state.isPasswordHidden}
              toggleShowPassword={this.toggleShowPassword}
            />
            <CommonButton
              disabled={this.state.isLoading}
              title={strings.signin}
              style={SignInScreenStyles.signinButtonStyle}
              onPress={this.signin}
            />
            <View style={SignInScreenStyles.seperatorStyle} />
            <CommonButton
              title={strings.register}
              style={SignInScreenStyles.signinButtonStyle}
              onPress={this.navigateToSignup}
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}
