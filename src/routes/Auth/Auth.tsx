
import { useAuth } from '@/auth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export type AuthProps = {
	// types...
}

const Auth: React.FC<AuthProps>  = ({}) => {
	const auth = useAuth();

	return (
		auth.isAuthenticated ? <Outlet/> : <Navigate to='/'/>
	);
};

export default Auth;
