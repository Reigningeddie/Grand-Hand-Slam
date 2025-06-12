import React from 'react';
// import type {PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Edit from '../screens/EditProfile';
import BottomTabs from '../Stacks/BottomTabs';
import type {AuthList} from '../types/types';


//Auth Stack
const Auth = createNativeStackNavigator<AuthList>();

function App(): React.JSX.Element {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{headerShown: false,
          statusBarColor: 'black'
        }}
      />
      <Auth.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Auth.Screen 
        name="EditProfile" 
        component={Edit}
        options={{title: 'back'}} />
    </Auth.Navigator>
  );
}

export default App;
