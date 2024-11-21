import React from 'react';
// import type {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import type {AuthList} from '../types/types';

//Auth Stack
const Auth = createNativeStackNavigator<AuthList>();

function App(): React.JSX.Element {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
}

export default App;
