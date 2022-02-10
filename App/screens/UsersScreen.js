import React, {Component} from 'react';
import {
  Text,
  Image,
  Animated,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {persons} from '../constants/PersonsList';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../theme/colors';
import {UsersScreenStyles} from '../styles/UsersScreenStyles';

export default class UsersScreen extends Component {
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
    const {navigation} = this.props;
    navigation.setOptions({
      title: 'Users',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather
            name={'menu'}
            color={colors.black}
            size={20}
            style={UsersScreenStyles.backIconStyle}
          />
        </TouchableOpacity>
      ),
    });
    this.fadeIn();
  }

  componentWillUnmount() {
    this.fadeOut();
  }

  navigateToProfile = item => {
    this.props.navigation.navigate('Profile', {
      user: item,
    });
  };

  renderFlatlistItem = item => {
    return (
      <TouchableOpacity
        onPress={() => this.navigateToProfile(item)}
        style={UsersScreenStyles.itemContainerStyle}>
        <Image
          source={{
            uri: item.photo,
          }}
          style={UsersScreenStyles.userImageStyle}
        />
        <View style={UsersScreenStyles.userDetailsContainerStyle}>
          <Text>{item.name}</Text>
          <Text>{item.position}</Text>
          <Text>{item.email}</Text>
        </View>
        <Icon
          name={'right'}
          size={16}
          style={UsersScreenStyles.nextIconStyle}
        />
      </TouchableOpacity>
    );
  };

  static navigationOptions = {
    title: 'Title',
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: 'abc',
    };
  };

  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        <FlatList
          data={persons}
          renderItem={({item}) => this.renderFlatlistItem(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={UsersScreenStyles.flatlistStyle}
          ItemSeparatorComponent={() => (
            <View style={UsersScreenStyles.itemSeperatorStyle} />
          )}
        />
      </Animated.View>
    );
  }
}
