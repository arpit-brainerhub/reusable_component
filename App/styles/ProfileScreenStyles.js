import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 30,
    marginBottom: 50,
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
});
