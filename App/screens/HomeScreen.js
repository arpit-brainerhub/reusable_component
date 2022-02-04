import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {persons} from '../constants/PersonLists';
import {HomeScreenStyles} from '../styles/HomeScreenStyles';
import {colors} from '../theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default class HomeScreen extends Component {
  data = {
    labels: ['delivered', 'pending', 'others'], // optional
    data: [0.4, 0.6, 0.8],
    colors: ['#FAD02C', '#FF0080', '#603F8B'],
  };

  navigateToProfile = item => {
    this.props.navigation.navigate('ProfileScreen', {
      user: item,
    });
  };

  renderFlatlistItem = item => {
    return (
      <TouchableOpacity
        onPress={() => this.navigateToProfile(item)}
        style={{
          padding: 15,
          backgroundColor: colors.white,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: item.photo,
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 80,
          }}
        />
        <View style={{borderWidth: 0, flex: 1, marginStart: 10, padding: 10}}>
          <Text>{item.name}</Text>
          <Text>{item.position}</Text>
          <Text>{item.email}</Text>
        </View>
        <Icon name={'right'} size={16} style={{marginRight: 10}} />
      </TouchableOpacity>
    );
  };

  renderChart() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          marginBottom: 10,
          borderRadius: 10,
          alignItems: 'flex-start',
        }}>
        <ProgressChart
          data={this.data}
          width={Dimensions.get('window').width - 30}
          height={300}
          strokeWidth={16}
          radius={25}
          chartConfig={{
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          hideLegend={false}
          withCustomBarColorFromData={true}
          style={{borderRadius: 10}}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      // <LinearGradient
      //   colors={['#ff8a00', '#e52e71']}
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 1}}
      //   style={HomeScreenStyles.gradientstyle}>
      <View style={HomeScreenStyles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 30,
          }}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#00008B',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.white, fontSize: 35}}>5</Text>
            <Text style={{color: colors.white, fontSize: 12}}>{'Orders'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#FF0833',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.white, fontSize: 35}}>2</Text>
            <Text style={{color: colors.white, fontSize: 12}}>{'Users'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: '#FFA500',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.white, fontSize: 35}}>10</Text>
            <Text style={{color: colors.white, fontSize: 12}}>
              {'Complaints'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={HomeScreenStyles.titleTextStyle}>Home Screen</Text> */}
        <FlatList
          data={persons}
          renderItem={({item}) => this.renderFlatlistItem(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={{margin: 10}}
          ListHeaderComponent={() => this.renderChart()}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      </View>
      // </LinearGradient>
    );
  }
}
