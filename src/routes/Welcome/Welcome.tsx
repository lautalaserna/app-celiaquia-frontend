import { DefaultLayout } from '@/components/DefaultLayout';
import React from 'react';

export type WelcomeProps = {
	// types...
}

const Welcome: React.FC<WelcomeProps>  = ({}) => {
	return (
		<DefaultLayout>
			<div>
				<h2>App Celiaquía🍞</h2>
				<p>Bienvenido al sistema de gestión para Celíacos</p>
			</div>
		</DefaultLayout>
	);
};

export default Welcome;
