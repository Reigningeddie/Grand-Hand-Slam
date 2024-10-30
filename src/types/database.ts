export type AuthContextType = {
  AuthUser: any;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{data:any; error?: any}>;
  login: (email: string, password: string) => Promise<{data: any; error?: any}>;
  userData: (email: string, password: string, firstName?: string, lastName?: string, userName?: string, mobileNumber?: string) => Promise<{data: any; error?: any}>;
  logout: () => Promise<void>;
  err: string | null;
};
