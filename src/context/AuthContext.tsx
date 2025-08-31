import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getAuthToken, setAuthToken, removeAuthToken } from '../utils/auth';
import type { User } from '../types/auth.types';
import type { AuthContextType } from '../types/auth.types';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setUser({ 
        email: 'user@example.com', 
        name: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=FF6B35&color=fff'
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call - Replace with actual API
      const mockApiCall = (): Promise<{ token: string; user: User }> => 
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (email === 'user@example.com' && password === 'password123') {
              resolve({
                token: 'mock-jwt-token-' + Date.now(),
                user: { 
                  email, 
                  name: 'John Doe',
                  avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=FF6B35&color=fff'
                }
              });
            } else {
              reject(new Error('Invalid credentials'));
            }
          }, 1000);
        });

      const response = await mockApiCall();
      const { token, user } = response;
      
      setAuthToken(token);
      setUser(user);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Login failed' 
      };
    }
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      // Simulate API call - In a real implementation, these would be sent to the server
      console.log('Changing password from', currentPassword.length, 'chars to', newPassword.length, 'chars');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: 'Failed to change password' 
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, changePassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
};