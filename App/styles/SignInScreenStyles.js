import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const SignInScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  gradientstyle: {
    flex: 1,
  },
  bodyTextStyle: {
    color: colors.white,
    fontSize: 18,
  },
  titleTextStyle: {
    color: colors.white,
    fontSize: 30,
    marginTop: '30%',
    marginBottom: '15%',
  },
  signinButtonStyle: {
    marginTop: '10%',
  },
  seperatorStyle: {
    height: 1,
    width: '30%',
    backgroundColor: colors.transparent,
    marginTop: '10%',
  },
});
