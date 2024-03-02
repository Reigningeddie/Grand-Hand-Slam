import React from 'react';
// import type {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import {NavigationList} from '../types/navigation';

//Auth Stack
const Auth = createNativeStackNavigator<NavigationList>();

function App(): React.JSX.Element {
  return (
    <Auth.Navigator initialRouteName="Login">
      <Auth.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen name="SignUp" component={SignUp} />
      {/* <Auth.Screen
        name="Home"
        component={Profile}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{title: 'Leaderboard'}}
        /> */}
    </Auth.Navigator>
  );
}

export default App;
