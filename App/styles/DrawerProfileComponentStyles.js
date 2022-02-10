import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const DrawerProfileComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '0%',
    paddingBottom: '20%',
    borderRadius: 10,
  },
  closeButtonStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileImageContainerStyle: {
    marginLeft: 8,
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 60,
    overflow: 'hidden',
  },
  profileImageStyle: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});
