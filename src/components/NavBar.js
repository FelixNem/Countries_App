import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

import '../Style/Components/NavbarStyle.css';

const NavBar = ({ isHome=false }) => {
    return (
        <nav className='navbarContainer' >
            <div className='linkContainer' >
                <h1>Countries App</h1>
                { !isHome && 
                    <Link to="/" className='linkItem' >
                        Back Countries
                    </Link>
                }
            </div>
            <SearchBox />
        </nav>
    )
}

export default NavBar;
