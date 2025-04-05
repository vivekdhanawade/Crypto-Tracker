import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className='name' to="/">CRYPTO TRACKER</Link>
    </div>
  ); 
};

export default Navbar;