import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthList = {
  Login: any;
  EditProfile: any;
  BottomTabs: any;
};

export type BottomTabsList = {
  Home: any;
  LeaderBoard: any;
  Search: any;
  Rules: any;
};

export type RootList = {
  Auth: any;
  BottomTabs: any;
};

// export type NavProp = RouteProp<NavigationParamList, 'Login'>;
export type NavProps = NativeStackScreenProps<AuthList>;

export type AuthContextType = {
  authUser: any;
  profile: any;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{data:any; error?: any}>;
  login: (email: string, password: string) => Promise<{data: any; error?: any}>;
  fetchProfile: (id: string) => Promise<{data: any, error?: any}>;
  update: (firstName?: string, lastName?: string, userName?: string, mobileNumber?: string) => Promise<{data: any; error?: any}>;
  logout: () => Promise<void>;
  err: string | null;
};
