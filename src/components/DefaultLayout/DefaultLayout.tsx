import React from 'react';
import { Navbar } from '../Navbar';

export type DefaultLayoutProps = {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps>  = ({children}) => {
	return (
		<>
 			<header>
				<Navbar/>
			</header>
			<main>
				{children}
			</main>
 		</>
	);
};

export default DefaultLayout;
