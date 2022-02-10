import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DrawerProfileComponentStyles} from '../styles/DrawerProfileComponentStyles';
import {colors} from '../theme/colors';
import {images} from '../constants/ImageConstants';
import * as strings from '../constants/StringConstants';

const DrawerProfileComponent = props => {
  return (
    <View style={DrawerProfileComponentStyles.container}>
      <TouchableOpacity
        style={DrawerProfileComponentStyles.closeButtonStyle}
        onPress={() => {
          props.navigation.closeDrawer();
        }}>
        <Icon name={'close'} size={20} color={colors.darkGrey} />
      </TouchableOpacity>
      <View style={DrawerProfileComponentStyles.profileImageContainerStyle}>
        <Image
          source={images.profileImage}
          style={DrawerProfileComponentStyles.profileImageStyle}
        />
      </View>
      <Text>{strings.profileName}</Text>
      <Text>{strings.profileEmail}</Text>
    </View>
  );
};

export default DrawerProfileComponent;
