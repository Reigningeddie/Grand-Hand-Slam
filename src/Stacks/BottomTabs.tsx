import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import LeaderBoard from '../screens/LeaderBoard';
import {BottomTabsList} from '../types/types';
import Search from '../screens/Search';
import Rules from '../screens/Rules';

const Home = createBottomTabNavigator<BottomTabsList>();

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
