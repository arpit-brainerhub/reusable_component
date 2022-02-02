import * as React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {CommonButtonStyles} from '../styles/CommonButtonStyles';
import {colors} from '../theme/colors';

const CommonButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled || false}
      style={[CommonButtonStyles.buttonContainerStyle, props.style]}
      onPress={props.onPress}>
      {props.disabled ? (
        <ActivityIndicator color={colors.transparent} size={25} />
      ) : (
        <Text style={CommonButtonStyles.buttonTextStyle}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CommonButton;
