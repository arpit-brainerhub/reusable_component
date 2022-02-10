import React, {Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Animated} from 'react-native';
import {ProgressChart, LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeScreenStyles} from '../styles/HomeScreenStyles';
import {colors} from '../theme/colors';
import Svg, {Rect, Text as TextSVG} from 'react-native-svg';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
      tooltipPos: {x: 0, y: 0, visible: false, value: 0},
      progressTime: 0,
      orders: 0,
      users: 0,
      complaints: 0,
      delivered: 0,
      pending: 0,
      others: 0,
      janCount: 1,
      febCount: 1,
      marCount: 1,
      aprCount: 1,
      mayCount: 1,
      junCount: 1,
      julCount: 1,
      janSales: 0,
      febSales: 0,
      marSales: 0,
      aprSales: 0,
      maySales: 0,
      junSales: 0,
    };
    this.width = new Animated.Value(0);
  }

  ordersAnimationValue = new Animated.Value(0);
  usersAnimationValue = new Animated.Value(0);
  complaintsAnimationValue = new Animated.Value(0);
  deliveredAnimationValue = new Animated.Value(0);
  pendingAnimationValue = new Animated.Value(0);
  othersAnimationValue = new Animated.Value(0);
  janAnimationValue = new Animated.Value(1);
  febAnimationValue = new Animated.Value(1);
  marAnimationValue = new Animated.Value(1);
  aprAnimationValue = new Animated.Value(1);
  mayAnimationValue = new Animated.Value(1);
  junAnimationValue = new Animated.Value(1);
  julAnimationValue = new Animated.Value(1);

  janSalesAnimationValue = new Animated.Value(0);
  febSalesAnimationValue = new Animated.Value(0);
  marSalesAnimationValue = new Animated.Value(0);
  aprSalesAnimationValue = new Animated.Value(0);
  maySalesAnimationValue = new Animated.Value(0);
  junSalesAnimationValue = new Animated.Value(0);

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // <-- Add this
    }).start();
  };

  setTooltipPos = value => {
    this.setState({
      tooltipPos: value,
    });
  };

  data = () => ({
    labels: ['delivered', 'pending', 'others'], // optional
    data: [this.state.delivered, this.state.pending, this.state.others],
    colors: ['#FAD02C', '#FF0080', '#603F8B'],
  });

  componentDidMount() {
    this.fadeIn();
    this.setAnimation(5, this.ordersAnimationValue, this.setOrdersState);
    this.setAnimation(2, this.usersAnimationValue, this.setUsersState);
    this.setAnimation(
      10,
      this.complaintsAnimationValue,
      this.setComplaintsState,
    );
    this.setAnimation(
      0.4,
      this.deliveredAnimationValue,
      this.setDeliveredState,
    );
    this.setAnimation(0.6, this.pendingAnimationValue, this.setPendingState);
    this.setAnimation(0.8, this.othersAnimationValue, this.setOthersState);
    this.setAnimation(20, this.janAnimationValue, this.setJanCountState);
    this.setAnimation(45, this.febAnimationValue, this.setFebCountState);
    this.setAnimation(28, this.marAnimationValue, this.setMarCountState);
    this.setAnimation(80, this.aprAnimationValue, this.setAprCountState);
    this.setAnimation(59, this.mayAnimationValue, this.setMayCountState);
    this.setAnimation(43, this.junAnimationValue, this.setJunCountState);
    this.setAnimation(50, this.julAnimationValue, this.setJulCountState);

    this.setAnimation(100, this.janSalesAnimationValue, this.setJanSalesState);
    this.setAnimation(170, this.febSalesAnimationValue, this.setFebSalesState);
    this.setAnimation(300, this.marSalesAnimationValue, this.setMarSalesState);
    this.setAnimation(320, this.aprSalesAnimationValue, this.setAprSalesState);
    this.setAnimation(180, this.maySalesAnimationValue, this.setMaySalesState);
    this.setAnimation(200, this.junSalesAnimationValue, this.setJunSalesState);
  }

  setOrdersState = value => {
    this.setState({
      orders: value,
    });
  };

  setUsersState = value => {
    this.setState({
      users: value,
    });
  };

  setComplaintsState = value => {
    this.setState({
      complaints: value,
    });
  };

  setDeliveredState = value => {
    this.setState({
      delivered: value,
    });
  };

  setPendingState = value => {
    this.setState({
      pending: value,
    });
  };

  setOthersState = value => {
    this.setState({
      others: value,
    });
  };

  setJanCountState = value => {
    this.setState({
      janCount: value,
    });
  };

  setFebCountState = value => {
    this.setState({
      febCount: value,
    });
  };

  setMarCountState = value => {
    this.setState({
      marCount: value,
    });
  };

  setAprCountState = value => {
    this.setState({
      aprCount: value,
    });
  };

  setMayCountState = value => {
    this.setState({
      mayCount: value,
    });
  };

  setJunCountState = value => {
    this.setState({
      junCount: value,
    });
  };

  setJulCountState = value => {
    this.setState({
      julCount: value,
    });
  };

  setJanSalesState = value => {
    this.setState({
      janSales: value,
    });
  };

  setFebSalesState = value => {
    this.setState({
      febSales: value,
    });
  };

  setMarSalesState = value => {
    this.setState({
      marSales: value,
    });
  };

  setAprSalesState = value => {
    this.setState({
      aprSales: value,
    });
  };

  setMaySalesState = value => {
    this.setState({
      maySales: value,
    });
  };

  setJunSalesState = value => {
    this.setState({
      junSales: value,
    });
  };

  setAnimation = (toValue, field, callback) => {
    Animated.timing(field, {
      toValue: toValue, // Value to graph
      duration: 3000, // Duration for animation
      useNativeDriver: false,
    }).start();

    field.addListener(({value}) => {
      // console.log('🚀 ~ animationValue.addListener ~ value', value);
      callback(value);
    });
  };

  renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 30,
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#00008B',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('OrdersScreen')}>
          <Text style={{color: colors.white, fontSize: 35}}>
            {this.state.orders.toFixed(0)}
          </Text>
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
          }}
          onPress={() => this.props.navigation.navigate('UsersScreen')}>
          <Text style={{color: colors.white, fontSize: 35}}>
            {this.state.users.toFixed(0)}
          </Text>
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
          <Text style={{color: colors.white, fontSize: 35}}>
            {this.state.complaints.toFixed(0)}
          </Text>
          <Text style={{color: colors.white, fontSize: 12}}>
            {'Complaints'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderChart() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'flex-start',
          }}>
          <ProgressChart
            data={this.data()}
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
      </Animated.View>
    );
  }

  renderLineChart() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'flex-start',
          }}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    this.state.janSales,
                    this.state.febSales,
                    this.state.marSales,
                    this.state.aprSales,
                    this.state.maySales,
                    this.state.junSales,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width}
            height={250}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: '#fbfbfb',
              backgroundGradientTo: '#fbfbfb',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(100, 0, 100, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#fbfbfb',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 6,
            }}
            decorator={() => {
              return this.state.tooltipPos.visible ? (
                <View>
                  <Svg>
                    <Rect
                      x={this.state.tooltipPos.x - 15}
                      y={this.state.tooltipPos.y + 10}
                      rx={10}
                      width="60"
                      height="30"
                      fill={colors.grey}
                    />
                    <TextSVG
                      x={this.state.tooltipPos.x + 15}
                      y={this.state.tooltipPos.y + 30}
                      fill="white"
                      fontSize="16"
                      textAnchor="middle">
                      {this.state.tooltipPos.value}
                    </TextSVG>
                  </Svg>
                </View>
              ) : null;
            }}
            onDataPointClick={data => {
              let isSamePoint =
                this.state.tooltipPos.x === data.x &&
                this.state.tooltipPos.y === data.y;

              isSamePoint
                ? this.setTooltipPos(previousState => {
                    return {
                      ...previousState,
                      value: data.value,
                      visible: !previousState.visible,
                    };
                  })
                : this.setTooltipPos({
                    x: data.x,
                    value: '$' + data.value + 'k',
                    y: data.y,
                    visible: true,
                  });
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }

  renderVerticalGraph() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'flex-start',
          }}>
          <VerticalBarGraph
            data={[
              this.state.janCount,
              this.state.febCount,
              this.state.marCount,
              this.state.aprCount,
              this.state.mayCount,
              this.state.junCount,
              this.state.julCount,
            ]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={Dimensions.get('screen').width - 100}
            height={300}
            barRadius={5}
            barColor={'green'}
            barWidthPercentage={0.5}
            baseConfig={{
              hasXAxisBackgroundLines: false,
              xAxisLabelStyle: {
                position: 'left',
                prefix: '$',
              },
            }}
            style={{
              marginBottom: 10,
              padding: 10,
              paddingTop: 20,
              borderRadius: 20,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width - 20,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }

  render() {
    return (
      // <LinearGradient
      //   colors={['#ff8a00', '#e52e71']}
      //   start={{x: 0, y: 0}}
      //   end={{x: 1, y: 1}}
      //   style={HomeScreenStyles.gradientstyle}>
      <ScrollView
        style={HomeScreenStyles.container}
        showsVerticalScrollIndicator={false}>
        {/* <Text style={HomeScreenStyles.titleTextStyle}>Home Screen</Text> */}
        {this.renderHeader()}
        {this.renderChart()}
        {this.renderVerticalGraph()}
        {this.renderLineChart()}
      </ScrollView>
      // </LinearGradient>
    );
  }
}
