import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface User {
  firstName: string;
  id: string;
  lastName: string;
  mobileNumber: number;
  points: number;
}

export type NavigationList = {
  Auth: undefined;
  BottomTabs: undefined;
  Login: any;
  Profile: any;
  LeaderBoard: any;
  SignUp: any;
  Home: any;
  Search: any;
};

// export type NavProp = RouteProp<NavigationParamList, 'Login'>;
export type NavProps = NativeStackScreenProps<NavigationList>;
