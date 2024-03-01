import React from 'react';
// import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import LeaderBoard from '../screens/LeaderBoard';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  LeaderBoard: undefined;
};

//Auth Stack
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="Home"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{title: 'Leaderboards'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
