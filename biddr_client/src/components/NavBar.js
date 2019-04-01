import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px 30px',
			}}
		>
            <NavLink to="/">Home</NavLink>
			<NavLink to="/auctions">Auctions</NavLink>
		</nav>
	);
}

export default NavBar;