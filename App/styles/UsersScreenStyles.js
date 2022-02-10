import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const UsersScreenStyles = StyleSheet.create({
  backIconStyle: {
    marginLeft: 0,
    marginRight: Dimensions.get('screen').width * 0.1,
  },
  flatlistStyle: {
    margin: 10,
  },
  itemSeperatorStyle: {
    height: 10,
  },
  itemContainerStyle: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  userDetailsContainerStyle: {
    borderWidth: 0,
    flex: 1,
    marginStart: 10,
    padding: 10,
  },
  nextIconStyle: {
    marginRight: 10,
  },
});
