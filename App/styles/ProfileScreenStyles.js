import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
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
    marginBottom: 10,
  },
  subTitleTextStyle: {
    color: colors.darkGrey,
    fontSize: 20,
  },
  descriptionTextStyle: {
    color: colors.darkGrey,
    fontSize: 15,
    padding: 50,
    textAlign: 'justify',
  },
  footerTextStyle: {
    color: colors.darkGrey,
    fontSize: 22,
    alignSelf: 'flex-end',
    marginVertical: 20,
    marginHorizontal: 50,
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
