import {NativeStackScreenProps} from '@react-navigation/native-stack';

// export interface MetaData {
//   displayName: any;
//   email: any;
//   emailVerified: boolean;
//   isAnonymous: boolean;
//   phoneNumber: any;
//   photoURL: any;
// }

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
};

// export type NavProp = RouteProp<NavigationParamList, 'Login'>;
export type NavProps = NativeStackScreenProps<NavigationList>;
