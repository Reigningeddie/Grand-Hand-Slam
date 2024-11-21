import {NativeStackScreenProps} from '@react-navigation/native-stack';

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

export type AuthContextType = {
  authUser: any;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{data:any; error?: any}>;
  login: (email: string, password: string) => Promise<{data: any; error?: any}>;
  profile: (email: string, password: string, firstName?: string, lastName?: string, userName?: string, mobileNumber?: string) => Promise<{data: any; error?: any}>;
  logout: () => Promise<void>;
  err: string | null;
};
