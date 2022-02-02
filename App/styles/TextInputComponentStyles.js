import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const TextInputComponentStyles = StyleSheet.create({
  containerStyle: {
    marginTop: '3%',
    marginBottom: '1%',
    width: '80%',
    alignSelf: 'center',
  },
  inputStyle: {
    color: colors.white,
  },
  inputContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});
