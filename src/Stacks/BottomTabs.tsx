import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import LeaderBoard from '../screens/Profile';
import {NavigationList} from '../types/navigation';

const Home = createBottomTabNavigator<NavigationList>();

function BottomTabs(): React.JSX.Element {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={Profile} />
      <Home.Screen name="LeaderBoard" component={LeaderBoard} />
    </Home.Navigator>
  );
}

export default BottomTabs;
