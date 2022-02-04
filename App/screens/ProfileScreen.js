import React, {Component} from 'react';
import {View, Text, Alert, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getUser} from '../constants/StorageUtils';
import {ProfileScreenStyles} from '../styles/ProfileScreenStyles';

export default class ProfileScreen extends Component {
  constructor() {
    super();
  }

  navigateToHome = () => {
    this.props.navigation.replace('Home');
  };

  navigateToSignin = () => {
    this.props.navigation.replace('SignIn');
  };

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.setOptions({title: route.params.user.name});
  }

  render() {
    const {user} = this.props.route.params;
    return (
      <View style={ProfileScreenStyles.container}>
        <Image
          source={{
            uri: user.photo || '',
          }}
          style={{
            height: 200,
            width: 200,
            borderRadius: 30,
            marginBottom: 50,
          }}
        />
        <Text style={ProfileScreenStyles.titleTextStyle}>{user.position}</Text>
        <Text style={ProfileScreenStyles.subTitleTextStyle}>{user.name}</Text>
        <Text style={ProfileScreenStyles.descriptionTextStyle}>
          {user.description}
        </Text>
        <Text style={ProfileScreenStyles.footerTextStyle}>{'thank you'}</Text>
      </View>
    );
  }
}
