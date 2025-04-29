// src/contexts/AuthContext.tsx
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {supabase} from '../database/supabase';
import type {AuthContextType} from '../types/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);


  useEffect(() => {
    const loadUser = async () => {
      try {
        const {data, error} = await supabase.auth.getUser();
          if (error) {
            throw new Error(error.message);
          }
          console.log('Loaded user:', data.user);
          if (data.user) {
            console.log('User Id:', data.user.id);
          } else {
            console.log('No user data available');
          }
          setAuthUser(data.user);
      } catch (error) {
        console.error('Error loading user:', error);
        setErr('Failed to load user');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadUser();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state change event:', event);
      if (event === 'SIGNED_IN') {
        setAuthUser(session?.user);
      } else if (event === 'SIGNED_OUT' || event === 'INITIAL_SESSION') {
        setAuthUser(null);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    setErr(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      return { data, error};
    } catch (error) {
      console.error('Sign up Failed', error);
      setErr(error instanceof Error ? error.message : 'An unknown error occurred during sign up');
      return { data: null, error };
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<{data: any; error?: any}> => {
    setErr(null);
    try {
      const {data, error: supabaseError} =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      if (!data?.session) {
        throw new Error('No session returned after login');
      }

      setAuthUser(data.user);
      return {data, error: null};
    } catch (error) {
      console.error('Login failed:', error);
      setErr(error instanceof Error ? error.message : 'An unknown error occurred during login');
      return {data: null, error};
    }
  };


  const profile = async (id: string) => {
    try {
      console.log('fetching id:', id)
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error); // Log the error object
        return { data: null, error };
      }

      console.log('Profile fetched successfully:', data); // Log the fetched profile data
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { data: null, error };
    }
  };

  const update = async (
    firstName?: string,
    lastName?: string,
    userName?: string,
    mobileNumber?: string
  ) => {
    setErr(null);
    try {
      const metadata = {
        id: authUser.id || null,
        firstName: firstName || null,
        lastName: lastName || null,
        userName: userName || null,
        mobileNumber: mobileNumber || null,
      };

      console.log('I am metadata', metadata)
  
      // Update AuthUser with additional user info
      const {data: updateUserResult, error: updateError} = await supabase
        .from('profile')
        .upsert(metadata)
        .select()

      if (updateError) {
        throw new Error(`Error updating user profile: ${updateError.message}`);
      }
  
      console.log('Profile updated successfully');
      return {data: updateUserResult, error: null};
    } catch (error) {
      console.error('Error updating profile:', error);
      setErr(error instanceof Error ? error.message : 'An unknown error occurred during profile update');
      return { data: null, error };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      console.log('logout Successful!')
      setAuthUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      setErr('Failed to sign out');
    }
  };

  return (
    <AuthContext.Provider value={{authUser, isLoading, signUp, profile, update, login, logout, err}}>
      {!isLoading ? children : <View style={styles.view}><Text style={styles.loading}>Loading...</Text></View>  }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    backgroundColor: '#F5F5F5',
    fontSize: 50
  }
});
