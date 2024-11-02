// src/contexts/AuthContext.tsx
import React, {createContext, useContext, useState, useEffect} from 'react';
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
        const {
          data: {user},
        } = await supabase.auth.getUser();
        setAuthUser(user);
      } catch (error) {
        console.error('Error loading user:', error);
        setErr('Failed to load user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

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

  const signUp = async(email: string, password: string) => {
    setErr(null);
    try {
      const {data, error: signUpError} = await supabase.auth.signUp({
        email,
        password,
      })
      if (signUpError) {
        throw new Error(signUpError.message);
      }
      console.log('User signed up:', data?.user);
      return {data, error:null};
    } catch (error) {
      console.error('Sign up Failed', error);
      setErr(error instanceof Error ? error.message : 'An unknown error occurred during sign up');
      return {data:null, error};
    }
  };

  const userData = async (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    userName?: string,
    mobileNumber?: string
  ) => {
    setErr(null);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (signUpError) {
        throw new Error(signUpError.message);
      }
  
      const userId = data?.user?.id;
      if (!userId) {
        throw new Error('No user ID returned after sign up');
      }
  
      const metadata = {
        firstName: firstName || null,
        lastName: lastName || null,
        userName: userName || null,
        mobileNumber: mobileNumber || null,
      };
  
      await supabase.from('users').update({ metadata }).eq('id', userId);
  
      // Update AuthUser with additional user info
      const updatedUser = {
        ...data.user,
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(userName && { userName }),
        ...(mobileNumber && { mobileNumber }),
      };
  
      setAuthUser(updatedUser);
  
      console.log('User data updated successfully');
      return { data, error: null };
    } catch (error) {
      console.error('Error updating user data:', error);
      setErr(error instanceof Error ? error.message : 'An unknown error occurred during metadata update');
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
    <AuthContext.Provider value={{authUser, isLoading, signUp, userData, login, logout, err}}>
      {!isLoading && children}
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
