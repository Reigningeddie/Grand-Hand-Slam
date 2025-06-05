import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import LeaderBoard from '../screens/LeaderBoard';
import {BottomTabsList} from '../types/types';
import Search from '../screens/Search';
import Rules from '../screens/Rules';

const Home = createBottomTabNavigator<BottomTabsList>();

function BottomTabs(): React.JSX.Element {
  return (
    <Home.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = require('../assets/BottomTabs/Home.png');
          } else if (route.name === "LeaderBoard") {
            iconSource = require('../assets/BottomTabs/Leaderboard.png');
          } else if (route.name === "Search") {
            iconSource = require('../assets/BottomTabs/Search.png');
          } else if (route.name === "Rules") {
            iconSource = require('../assets/BottomTabs/Rules.png');
          }

          return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />
        },
        tabBArActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Home.Screen
        name="Home"
        component={Profile}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
            <Home.Screen
        name="Rules"
        component={Rules}
        options={{headerShown: false}}
      />
    </Home.Navigator>
  );
}

export default BottomTabs;
