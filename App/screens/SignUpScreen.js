import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../components/CommonButton';
import TextInputComponent from '../components/TextInputComponent';
import {SignUpScreenStyles} from '../styles/SignUpScreenStyles';
import {storeData} from '../constants/StorageUtils';

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      isPasswordHidden: true,
      isConfirmPasswordHidden: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
    };
  }

  existingUsers = [];

  setFirstName = value => {
    this.setState({
      firstName: value,
    });
  };

  setLastName = value => {
    this.setState({
      lastName: value,
    });
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

  setConfirmPassword = value => {
    this.setState({
      confirmPassword: value,
    });
  };

  firstNameIcon = {
    type: 'ionicon',
    name: 'ios-person',
    color: 'white',
  };

  emailIcon = {
    type: 'MaterialCommunityIcons',
    name: 'email',
    color: 'white',
  };

  passwordIcon = {
    type: 'MaterialIcons',
    name: 'lock',
    color: 'white',
  };

  toggleShowPassword = () => {
    this.setState({
      isPasswordHidden: !this.state.isPasswordHidden,
    });
  };

  toggleShowConfirmPassword = () => {
    this.setState({
      isConfirmPasswordHidden: !this.state.isConfirmPasswordHidden,
    });
  };

  signup = () => {
    this.setLoading(true);
    setTimeout(() => {
      this.saveUser();
      this.setLoading(false);
    }, 2000);
  };

  saveUser = async () => {
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    storeData(user).then(data => this.navigateToHome(data.firstName));
  };

  setLoading = bool => {
    this.setState({
      isLoading: bool,
    });
  };

  navigateToSignin = () => {
    this.props.navigation.replace('SignIn');
  };

  navigateToHome = firstName => {
    Alert.alert('', 'Welcome ' + firstName);
    this.props.navigation.replace('Home');
  };

  render() {
    return (
      <LinearGradient
        colors={['#ff8a00', '#e52e71']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={SignUpScreenStyles.gradientstyle}>
        <KeyboardAwareScrollView>
          <View style={SignUpScreenStyles.container}>
            <Text style={SignUpScreenStyles.titleTextStyle}>{'Sign Up'}</Text>
            <View style={SignUpScreenStyles.rowStyle}>
              <TextInputComponent
                containerStyle={SignUpScreenStyles.firstLastNameContainerStyle}
                disabled={this.state.isLoading}
                value={this.state.firstName}
                onChangeText={this.setFirstName}
                placeholder="first name"
                leftIcon={this.firstNameIcon}
              />
              <TextInputComponent
                containerStyle={[
                  SignUpScreenStyles.firstLastNameContainerStyle,
                ]}
                disabled={this.state.isLoading}
                value={this.state.lastName}
                onChangeText={this.setLastName}
                placeholder="last name"
              />
            </View>

            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.email}
              onChangeText={this.setEmail}
              placeholder="email@address.com"
              leftIcon={this.emailIcon}
            />

            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.password}
              onChangeText={this.setPassword}
              placeholder="password"
              leftIcon={this.passwordIcon}
              isPasswordInput={true}
              isPasswordHidden={this.state.isPasswordHidden}
              toggleShowPassword={this.toggleShowPassword}
            />

            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.confirmPassword}
              onChangeText={this.setConfirmPassword}
              placeholder="confirm password"
              leftIcon={this.passwordIcon}
              isPasswordInput={true}
              isPasswordHidden={this.state.isConfirmPasswordHidden}
              toggleShowPassword={this.toggleShowConfirmPassword}
            />

            <CommonButton
              disabled={this.state.isLoading}
              title={'Register'}
              style={SignUpScreenStyles.signupButtonStyle}
              onPress={this.signup}
            />
            <View style={SignUpScreenStyles.seperatorStyle} />
            <CommonButton title={'Sign In'} onPress={this.navigateToSignin} />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}
