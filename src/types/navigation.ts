import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface metaData {
  displayName: any;
  email: any;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: any;
  photoURL: any;
}

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
export type NavProps = NativeStackScreenProps<NavigationList>;
