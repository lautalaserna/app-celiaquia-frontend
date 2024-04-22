import React from 'react';
import { Link } from 'react-router-dom';

export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = ({}) => {
	return (
		<nav>
 			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
 		</nav>
	);
};

export default Navbar;
