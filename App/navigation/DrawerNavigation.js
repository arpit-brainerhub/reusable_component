import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {logoutUser} from '../constants/StorageUtils';
import ProfileScreen from '../screens/ProfileScreen';
import UsersScreen from '../screens/UsersScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from '../screens/OrdersScreen';
import DrawerProfileComponent from '../components/DrawerProfileComponent';
import {DrawerNavigationStyles} from '../styles/DrawerNavigationStyles';
import {images} from '../constants/ImageConstants';

const Drawer = createDrawerNavigator();
const UserStack = createNativeStackNavigator();

const CustomDrawer = props => {
  return (
    <View style={DrawerNavigationStyles.container}>
      <Image
        source={images.drawerBgImage}
        style={DrawerNavigationStyles.bgImageStyle}
      />
      <DrawerProfileComponent {...props} />
      <TouchableOpacity
        style={DrawerNavigationStyles.itemStyle}
        onPress={() => navigateToDashboard(props.nafigation)}>
        <Text style={DrawerNavigationStyles.itemTextStyle}>{'Dashboard'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DrawerNavigationStyles.itemStyle}
        onPress={() => navigateToOrders(props.navigation)}>
        <Text style={DrawerNavigationStyles.itemTextStyle}>{'Orders'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DrawerNavigationStyles.itemStyle}
        onPress={() => navigateToUsers(props.navigation)}>
        <Text style={DrawerNavigationStyles.itemTextStyle}>{'Users'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={DrawerNavigationStyles.itemStyle}>
        <Text style={DrawerNavigationStyles.itemTextStyle}>{'Complaints'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DrawerNavigationStyles.itemStyle}
        onPress={() => logout(props.navigation)}>
        <Text style={DrawerNavigationStyles.itemTextStyle}>{'Logout'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const navigateToDashboard = navigation => {
  navigation.navigate('DashboardScreen');
};

const navigateToSignin = navigation => {
  navigation.replace('SignIn');
};

const navigateToOrders = navigation => {
  navigation.navigate('OrdersScreen');
};

const navigateToUsers = navigation => {
  navigation.navigate('UsersScreen');
};

const logout = navigation => {
  logoutUser().then(() => navigateToSignin(navigation));
};

const ProfileStack = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <UserStack.Screen name="Users" component={UsersScreen} />
      <UserStack.Screen name="Profile" component={ProfileScreen} />
    </UserStack.Navigator>
  );
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{drawerStyle: {backgroundColor: 'transparent'}}}>
      <Drawer.Screen
        name="DashboardScreen"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="UsersScreen"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          title: 'Orders',
        }}
      />
    </Drawer.Navigator>
  );
}
