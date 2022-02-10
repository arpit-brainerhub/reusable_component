import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const OrdersScreenStyles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImageStyle: {
    alignSelf: 'flex-start',
    marginTop: 10,
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  descriptionContainerStyle: {
    borderWidth: 0,
    flex: 1,
    marginStart: '5%',
    padding: 10,
  },
  orderIdTextStyle: {
    fontWeight: 'bold',
  },
  containerRowStyle: {
    flexDirection: 'row',
  },
  productNameTextStyle: {
    fontWeight: '500',
    fontStyle: 'italic',
  },
  shippingAddressNameTextStyle: {
    fontWeight: '500',
    marginTop: '5%',
  },
  shippingAddressTextStyle: {
    flex: 1,
    flexWrap: 'wrap',
  },
  nextIconStyle: {
    marginRight: 10,
  },
  flatlistStyle: {
    margin: 10,
  },
  itemSeperatorStyle: {
    height: 10,
  },
});
