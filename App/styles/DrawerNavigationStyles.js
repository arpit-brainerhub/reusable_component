import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const DrawerNavigationStyles = StyleSheet.create({
  container: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  bgImageStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 1,
  },
  itemStyle: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    borderColor: '#0000001A',
    backgroundColor: colors.white,
  },
  itemTextStyle: {
    fontSize: 14,
    color: colors.darkGrey,
  },
});
