import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  gradientstyle: {
    flex: 1,
  },
  bodyTextStyle: {
    color: colors.white,
    fontSize: 18,
  },
  titleTextStyle: {
    color: colors.black,
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
