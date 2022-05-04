import React from 'react';
import { Link } from 'react-router-dom';

import '../Style/Components/CountriesItem.css';

const CountriesItem = ({ name, flag, code }) => {

    return (
        <div className='countryCard' >
            <Link to={`country/${code}`}>
                <img alt={`Flag of ${name}`} src={flag} />
            </Link>
            <div className='card_overlay' >
                <h2>{name}</h2>
            </div>
            
        </div>
    )
}

export default CountriesItem;
