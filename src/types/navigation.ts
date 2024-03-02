import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NavigationList = {
  Auth: undefined;
  BottomTabs: undefined;
  Login: undefined;
  Profile: undefined;
  LeaderBoard: undefined;
  SignUp: undefined;
  Home: undefined;
};

// export type NavProp = RouteProp<NavigationParamList, 'Login'>;
export type NavProps = NativeStackScreenProps<NavigationList, 'Login'>;
