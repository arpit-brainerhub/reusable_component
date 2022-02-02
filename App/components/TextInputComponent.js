import * as React from 'react';
import {Input} from 'react-native-elements';
import {TextInputComponentStyles} from '../styles/TextInputComponentStyles';
import {colors} from '../theme/colors';

const TextInputComponent = props => {
  const {
    placeholder,
    isPasswordInput,
    isPasswordHidden,
    leftIcon,
    toggleShowPassword,
    containerStyle,
  } = props;
  const disabled = props.disabled || false;
  return (
    <Input
      value={props.value}
      onChangeText={props.onChangeText}
      disabled={disabled}
      placeholder={placeholder}
      inputStyle={TextInputComponentStyles.inputStyle}
      containerStyle={[TextInputComponentStyles.containerStyle, containerStyle]}
      placeholderTextColor={colors.white}
      inputContainerStyle={TextInputComponentStyles.inputContainerStyle}
      leftIcon={leftIcon}
      rightIcon={
        isPasswordInput && {
          type: 'font-awesome',
          name: isPasswordHidden ? 'eye' : 'eye-slash',
          color: 'white',
          size: 20,
          onPress: toggleShowPassword,
        }
      }
      secureTextEntry={isPasswordHidden}
    />
  );
};

export default TextInputComponent;
