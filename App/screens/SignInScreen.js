import React, {Component} from 'react';
import {Alert, Text, ToastAndroid, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../components/CommonButton';
import {SignInScreenStyles} from '../styles/SignInScreenStyles';
import TextInputComponent from '../components/TextInputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getUser, storeUser} from '../constants/StorageUtils';

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

  setLoading = bool => {
    this.setState({
      isLoading: bool,
    });
  };

  signin = () => {
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
          Alert.alert('', 'Invalid credentials. Try again');
        }
      });
    }, 2000);
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
        colors={['#44107A', '#FF1361', '#FFF800']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={SignInScreenStyles.gradientstyle}>
        <KeyboardAwareScrollView>
          <View style={SignInScreenStyles.container}>
            <Text style={SignInScreenStyles.titleTextStyle}>{'Sign In'}</Text>
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
            <CommonButton
              disabled={this.state.isLoading}
              title={'Sign In'}
              style={SignInScreenStyles.signinButtonStyle}
              onPress={this.signin}
            />
            <View style={SignInScreenStyles.seperatorStyle} />
            <CommonButton
              title={'Register'}
              style={SignInScreenStyles.signinButtonStyle}
              onPress={this.navigateToSignup}
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}
