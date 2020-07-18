import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div>
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Product"> Product </Link>
	</div>
  );
}

export default NavBar;