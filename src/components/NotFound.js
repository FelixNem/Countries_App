import React from 'react';

import CodeError from '../images/CodeError.png';
import BlueWorld from '../images/BlueWorld.png';

import '../Style/Components/NotFoundStyle.css';

const NotFound = () => {
    return (
        <div className='notFoundContainer' >
            <div className='notFoundMessague'>
                <img alt='Code of Error' src={CodeError} />
                <div className='messague' >
                    <p className='boldText' >Country not Found</p>
                    <p>We're Sorry, something's missing</p>
                </div>
            </div>
            <div className='notFoundImage' >
                <img alt='World' src={BlueWorld} />
            </div>
        </div>
    )
}

export default NotFound;
