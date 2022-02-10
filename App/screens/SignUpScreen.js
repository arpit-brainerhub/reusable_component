import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../components/CommonButton';
import TextInputComponent from '../components/TextInputComponent';
import {SignUpScreenStyles} from '../styles/SignUpScreenStyles';
import {storeUser} from '../constants/StorageUtils';
import * as constants from '../constants/Constants';
import * as strings from '../constants/StringConstants';
import {colors} from '../theme/colors';

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

  validateFields = () => {
    const {firstName, lastName, email, password, confirmPassword} = this.state;
    if (
      firstName.length <= 0 ||
      lastName.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0 ||
      confirmPassword.length <= 0 ||
      password !== confirmPassword
    ) {
      return false;
    } else {
      return true;
    }
  };

  signup = () => {
    if (this.validateFields()) {
      this.setLoading(true);
      setTimeout(() => {
        this.saveUser();
        this.setLoading(false);
      }, 2000);
    } else {
      Alert.alert('', strings.enterRequiredFields);
    }
  };

  saveUser = async () => {
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      isLoggedIn: 'true',
    };
    storeUser(user).then(data => this.navigateToHome(data.firstName));
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
    this.props.navigation.replace('Home');
  };

  render() {
    return (
      <LinearGradient
        colors={[colors.signupLinearStart, colors.signupLinearEnd]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={SignUpScreenStyles.gradientstyle}>
        <KeyboardAwareScrollView>
          <View style={SignUpScreenStyles.container}>
            <Text style={SignUpScreenStyles.titleTextStyle}>
              {strings.signup}
            </Text>
            <View style={SignUpScreenStyles.rowStyle}>
              <TextInputComponent
                containerStyle={SignUpScreenStyles.firstLastNameContainerStyle}
                disabled={this.state.isLoading}
                value={this.state.firstName}
                onChangeText={this.setFirstName}
                placeholder={strings.firstNamePlaceholder}
                leftIcon={constants.firstNameIcon}
              />
              <TextInputComponent
                containerStyle={[
                  SignUpScreenStyles.firstLastNameContainerStyle,
                ]}
                disabled={this.state.isLoading}
                value={this.state.lastName}
                onChangeText={this.setLastName}
                placeholder={strings.lastNamePlaceholder}
              />
            </View>

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

            <TextInputComponent
              disabled={this.state.isLoading}
              value={this.state.confirmPassword}
              onChangeText={this.setConfirmPassword}
              placeholder={strings.confirmPasswordPlaceHolder}
              leftIcon={this.passwordIcon}
              isPasswordInput={true}
              isPasswordHidden={this.state.isConfirmPasswordHidden}
              toggleShowPassword={this.toggleShowConfirmPassword}
            />

            <CommonButton
              disabled={this.state.isLoading}
              title={strings.register}
              style={SignUpScreenStyles.signupButtonStyle}
              onPress={this.signup}
            />
            <View style={SignUpScreenStyles.seperatorStyle} />
            <CommonButton
              title={strings.signin}
              onPress={this.navigateToSignin}
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}
