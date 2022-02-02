import AsyncStorage from '@react-native-async-storage/async-storage';
import {email, firstName, lastName, password} from './StorageKeys';

export const storeData = async user => {
  try {
    await AsyncStorage.setItem(firstName, user.firstName);
    await AsyncStorage.setItem(lastName, user.lastName);
    await AsyncStorage.setItem(email, user.email);
    await AsyncStorage.setItem(password, user.password);
    return user;
  } catch (e) {
    // saving error
    console.log('SignUpScreen', 'store credentials error : ' + e);
  }
};

export const getData = async () => {
  try {
    let fetchedFirstName = await AsyncStorage.getItem(firstName);
    let fetchedLastName = await AsyncStorage.getItem(lastName);
    let fetchedEmail = await AsyncStorage.getItem(email);
    let fetchedPassword = await AsyncStorage.getItem(password);
    let user = {
      firstName: fetchedFirstName,
      lastName: fetchedLastName,
      email: fetchedEmail,
      password: fetchedPassword,
    };
    console.log('SignUpScreen', 'retrieved users : ' + JSON.stringify(user));
    return user;
  } catch (e) {
    // error reading value
    console.log('SignUpScreen', 'retrieve users error : ' + e);
  }
};
