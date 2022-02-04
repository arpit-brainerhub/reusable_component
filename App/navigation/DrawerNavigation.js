import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {logoutUser} from '../constants/StorageUtils';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const UserStack = createNativeStackNavigator();

const ProfileSection = () => {
  return (
    <View style={{alignItems: 'center', marginTop: '0%', marginBottom: '20%'}}>
      <View
        style={[
          {
            marginLeft: 8,
            height: 120,
            width: 120,
            alignSelf: 'center',
            marginVertical: 30,
            borderRadius: 60,
            borderColor: colors.grey,
            borderWidth: 1,
            overflow: 'hidden',
          },
        ]}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300?grayscale',
          }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginEnd: '2%'}}>{'Andrew'}</Text>
        <Text style={{margin: '0%'}}>{'Thomas'}</Text>
      </View>
      <Text>{'Andrew.Thomas@outlook.com'}</Text>
    </View>
  );
};

const CustomDrawer = props => {
  return (
    <View
      style={{
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ProfileSection />
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1, borderColor: colors.grey}}
        onPress={() => props.navigation.navigate('HomeScreen')}>
        <Text style={{fontSize: 18}}>{'Dashboard'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1, borderColor: colors.grey}}>
        <Text style={{fontSize: 18}}>{'Orders'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1, borderColor: colors.grey}}>
        <Text style={{fontSize: 18}}>{'Users'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1, borderColor: colors.grey}}>
        <Text style={{fontSize: 18}}>{'Complaints'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1, borderColor: colors.grey}}>
        <Text
          style={{fontSize: 18}}
          onPress={() =>
            logoutUser().then(() => navigateToSignin(props.navigation))
          }>
          {'Logout'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const navigateToSignin = navigation => {
  navigation.replace('SignIn');
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{drawerStyle: {backgroundColor: 'transparent'}}}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          drawerActiveBackgroundColor: 'black',
        }}
      />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
