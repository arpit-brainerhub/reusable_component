import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const SignUpScreenStyles = StyleSheet.create({
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
    marginTop: '20%',
    marginBottom: '10%',
  },
  signupButtonStyle: {
    marginTop: '5%',
  },
  seperatorStyle: {
    height: 1,
    width: '30%',
    backgroundColor: colors.transparent,
    marginVertical: '10%',
  },
  firstLastNameContainerStyle: {
    width: '50%',
  },
  rowStyle: {
    flexDirection: 'row',
    width: '80%',
  },
});
