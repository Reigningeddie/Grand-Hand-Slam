export type AuthContextType = {
  AuthUser: any;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<{data:any; error?: any}>;
  login: (email: string, password: string) => Promise<{data: any; error?: any}>;
  logout: () => Promise<void>;
  err: string | null;
};
