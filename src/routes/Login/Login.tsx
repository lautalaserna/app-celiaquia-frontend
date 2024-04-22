import { useAuth } from '@/auth';
import { DefaultLayout } from '@/components/DefaultLayout';
import React, { useState } from 'react';
import { ErrorResponse, Navigate, useNavigate } from 'react-router-dom';
import { AuthResponse, AuthResponseError } from '@/types/types';

const API_URL = 'localhost/3100/api' // TODO: Arreglar esto

export type LoginProps = {
	// types...
}

const Login: React.FC<LoginProps>  = ({}) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorResponse, setErrorResponse ] = useState('');
	
	const auth = useAuth();
	const goTo = useNavigate();
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		try {
			// TODO: Descomentar esto. Mostrarle esto a Juli los Types para validad desde el Back.
			/*
			const response = await fetch(`${API_URL}/login`,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{
						username,
						password
					}
				)
			})	
			*/
			
			// TODO: Borrar esta response de prueba
			const response = {
				body: {
					user: {
						_id: '1',
						name: 'User',
						username: 'username_xD'
					},
					accessToken: 'ACCESS_TOKEN',
					refreshToken: 'REFRESH_TOKEN'
				}, 
			}

			//TODO: Descomentar el if(response.ok) y borrar el if(true)
			//if(response.ok) {
			if(true) {
				console.log("Usuario logeado correctamente");
				setErrorResponse('');
				
				//TODO: Descomentar esto y borrar el const json: AuthResponse = response;
				//const json = (await response.json()) as AuthResponse
				const json: AuthResponse = response;
				console.log(json);

				if(json.body.accessToken && json.body.refreshToken) {
					auth.saveUser(json);
					goTo('/home');
				}

			} else {
				//TODO: Descomentar esto y borrar el setErrorResponse('Error al iniciar sesión'); 
				/*
				const json = (await response.json()) as AuthResponseError;
				setErrorResponse(json.body.error);
				*/
				setErrorResponse('Error al iniciar sesión');
				
				console.log("Error al intentar logear el usuario");

			}
		} catch (error) {
			console.log("Error :(");
		}
	}
	
	if(auth.isAuthenticated) {
		return <Navigate to='/home'/>
	}

	return (
		<DefaultLayout>			
			<form className='form' onSubmit={handleSubmit}>
				<h2>Login</h2>
				{!!errorResponse && <div className='errorMesage'>{errorResponse}</div>}
				<label>Username</label>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

				<label>Password</label>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
			
				<button>Login</button>
			</form>
		</DefaultLayout>
	);
};

export default Login;
