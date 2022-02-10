import React, {Component} from 'react';
import {Text, Image, Animated} from 'react-native';
import {ProfileScreenStyles} from '../styles/ProfileScreenStyles';

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // <-- Add this
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  navigateToHome = () => {
    this.props.navigation.replace('Home');
  };

  navigateToSignin = () => {
    this.props.navigation.replace('SignIn');
  };

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.setOptions({title: route.params.user.name});
    this.fadeIn();
  }

  componentWillUnmount() {
    this.fadeOut();
  }

  render() {
    const {user} = this.props.route.params;
    return (
      <Animated.View
        style={[ProfileScreenStyles.container, {opacity: this.state.fadeAnim}]}>
        <Image
          source={{
            uri: user.photo || '',
          }}
          style={ProfileScreenStyles.imageStyle}
        />
        <Text style={ProfileScreenStyles.titleTextStyle}>{user.position}</Text>
        <Text style={ProfileScreenStyles.subTitleTextStyle}>{user.name}</Text>
        <Text style={ProfileScreenStyles.descriptionTextStyle}>
          {user.description}
        </Text>
        <Text style={ProfileScreenStyles.footerTextStyle}>{'thank you'}</Text>
      </Animated.View>
    );
  }
}
