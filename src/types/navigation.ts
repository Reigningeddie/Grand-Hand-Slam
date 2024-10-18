import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface User {
  firstName: string;
  id: string;
  lastName: string;
  mobileNumber: number;
  points: number;
}

export type AuthContextType = {
  AuthUser: any;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{data:any; error?: any}>;
  login: (email: string, password: string) => Promise<{data: any; error?: any}>;
  logout: () => Promise<void>;
  err: string | null;
};

//! figure out how to keep bottomTabs only in bottomTabs list

export type AuthList = {
  Login: any;
  SignUp: any;
  BottomTabs: undefined;
};

export type BottomTabsList = {
  Home: any;
  LeaderBoard: any;
  Search: any;
};

export type RootList = {
  Auth: undefined;
  BottomTabs: undefined;
};

// export type NavProp = RouteProp<NavigationParamList, 'Login'>;
export type NavProps = NativeStackScreenProps<AuthList>;
