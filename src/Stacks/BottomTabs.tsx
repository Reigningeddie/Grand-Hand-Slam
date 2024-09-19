import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import LeaderBoard from '../screens/LeaderBoard';
import {NavigationList} from '../types/navigation';

const Home = createBottomTabNavigator<NavigationList>();

function BottomTabs(): React.JSX.Element {
  return (
    <Home.Navigator>
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
        component={LeaderBoard}
        options={{headerShown: false}}
      />
    </Home.Navigator>
  );
}

export default BottomTabs;
