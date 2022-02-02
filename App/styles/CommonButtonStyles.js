import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const CommonButtonStyles = StyleSheet.create({
  buttonContainerStyle: {
    padding: '3%',
    minWidth: '50%',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.blue,
  },
  buttonTextStyle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '300',
    justifyContent: 'flex-start',
  },
});
