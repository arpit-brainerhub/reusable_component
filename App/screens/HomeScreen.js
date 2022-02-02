import * as React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HomeScreenStyles} from '../styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#ff8a00', '#e52e71']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={HomeScreenStyles.gradientstyle}>
      <View style={HomeScreenStyles.container}>
        <Text style={HomeScreenStyles.titleTextStyle}>Home Screen</Text>
      </View>
    </LinearGradient>
  );
}
