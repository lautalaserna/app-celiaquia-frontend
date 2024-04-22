import { AuthResponse } from '@/types/types';
import React, { createContext, useContext, useState } from 'react';

export type AuthProviderProps = {
	children: React.ReactNode;
}

const AuthContext = createContext({
		isAuthenticated: false,
		getAccessToken: () => {},
		saveUser: (_userData:AuthResponse) => {},
});

const AuthProvider: React.FC<AuthProviderProps>  = ({children}) => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [accessToken, setAccessToken] = useState('');
	const [refreshToken, setRefreshToken] = useState('');

	function getAccessToken() {return accessToken};

	function saveUser(userData: AuthResponse) {
		setAccessToken(userData.body.accessToken);
		setRefreshToken(userData.body.refreshToken);
		
		localStorage.setItem('token',JSON.stringify(userData.body.refreshToken));
		setAuthenticated(true);
  }
	
	return (
		<AuthContext.Provider value={{isAuthenticated,getAccessToken,saveUser}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
