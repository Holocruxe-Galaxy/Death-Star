// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react';

// ** Next Import
import { useRouter } from 'next/router';

// ** Axios
import axios from 'axios';

// ** Config
import authConfig from 'src/configs/auth';

// ** Types
import {
  AuthValuesType,
  LoginParams,
  // ErrCallbackType,
  UserDataType,
} from './types';
import { afterLogin } from './functions';

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(
        authConfig.storageTokenKeyName,
      )!;
      if (window.localStorage.getItem('status') === 'PENDING') {
        router.replace('/register');
      }
      if (
        router.asPath !== '/register' &&
        !window.localStorage.getItem('status')
      ) {
        router.replace('/login');
      }
      if (storedToken) {
        setLoading(true);
        await axios
          .get(`${process.env.NEXT_PUBLIC_CORUSCANT}/users/verify`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          })
          .then(async (response) => {
            const responseData = await response.data;
            setLoading(false);
            setUser({
              id: responseData.userMail,
              username: responseData.userMail,
              role: 'admin',
            });
          })
          .catch(() => {
            setUser(null);
            window.localStorage.removeItem('AuthorizationToken');
            window.localStorage.removeItem('step');
            window.localStorage.removeItem('status');
            window.localStorage.removeItem('userData');
            window.localStorage.removeItem(authConfig.storageTokenKeyName);
            router.push('/api/auth/logout/');
            setLoading(false);
            if (
              authConfig.onTokenExpiration === 'logout' &&
              !router.pathname.includes('login')
            ) {
              router.replace('/login');
            }
          });
      } else {
        setLoading(false);
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (params: LoginParams, token: any) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_CORUSCANT}/users/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = response.data;

      const status = await afterLogin(token);
      if (status === 'PENDING') {
        window.localStorage.setItem('AuthorizationToken', token);
        router.replace('/register');
        setLoading(false);
        return;
      }
      if (status === 'COMPLETE') {
        if (params.rememberMe) {
          window.localStorage.setItem(authConfig.storageTokenKeyName, token);
          window.localStorage.setItem(
            'userData',
            JSON.stringify({ username: responseData.userMail, role: 'client' }),
          );
          setLoading(false);
        }

        const returnUrl = router.query.returnUrl;
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/';

        setUser({
          id: responseData.userMail,
          username: responseData.userMail,
          role: 'admin',
        });
        router.replace(redirectURL as string);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('AuthorizationToken');
    window.localStorage.removeItem('step');
    window.localStorage.removeItem('status');
    window.localStorage.removeItem('userData');
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    router.push('/api/auth/logout/');
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
