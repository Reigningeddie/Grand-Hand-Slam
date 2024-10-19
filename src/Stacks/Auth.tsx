import React from 'react';
// import type {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import type {AuthList} from '../types/navigation';

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
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}

export default App;
