import React, {Component} from 'react';
import {
  Text,
  Image,
  Animated,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {orders} from '../constants/OrdersList';
import Icon from 'react-native-vector-icons/AntDesign';
import {OrdersScreenStyles} from '../styles/OrdersScreenStyles';

export default class OrdersScreen extends Component {
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
      <TouchableOpacity style={OrdersScreenStyles.cardContainer}>
        <Image
          source={{
            uri: item.photo,
          }}
          style={OrdersScreenStyles.productImageStyle}
        />
        <View style={OrdersScreenStyles.descriptionContainerStyle}>
          <Text style={OrdersScreenStyles.orderIdTextStyle}>
            {'Order id : ' + item.id}
          </Text>
          <View style={OrdersScreenStyles.containerRowStyle}>
            <Text style={OrdersScreenStyles.productNameTextStyle}>
              {item.productName + ' (SKU - ' + item.sku + ')'}
            </Text>
          </View>
          <Text>{'Order Total - $' + item.price * item.quantity}</Text>
          <Text>{'Quantity - ' + item.quantity}</Text>
          <Text style={OrdersScreenStyles.shippingAddressNameTextStyle}>
            {item.name}
          </Text>
          <Text
            multiline={true}
            style={OrdersScreenStyles.shippingAddressTextStyle}>
            {'Ship To - ' +
              [
                item.shipTo.address,
                item.shipTo.city,
                item.shipTo.state + ' - ' + item.shipTo.zip,
              ].join(', ')}
          </Text>
        </View>
        <Icon
          name={'right'}
          size={16}
          style={OrdersScreenStyles.nextIconStyle}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        <FlatList
          data={orders}
          renderItem={({item}) => this.renderFlatlistItem(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={OrdersScreenStyles.flatlistStyle}
          ItemSeparatorComponent={() => (
            <View style={OrdersScreenStyles.itemSeperatorStyle} />
          )}
        />
      </Animated.View>
    );
  }
}
