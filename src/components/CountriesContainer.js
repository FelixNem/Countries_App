import React from 'react';
import useFetch from '../hooks/useFetch';
import CountriesItem from './CountriesItem';
import LoaderComponent from './loader/LoaderComponent';

import '../Style/Components/CountriesGrid.css';

const CountriesContainer = () => { 
    const { loading, data: countries } = useFetch('https://restcountries.com/v3.1/all');

    return (
        <>
            {  loading ?
                <LoaderComponent />
            :
            <>
                <h2 className='title' >All Countries</h2>
                <div className='GridContainer' >
                    {
                        countries.map(({ name, flags ,cca3 }) =>
                            <CountriesItem key={cca3} name={name.common} flag={flags.svg} code={cca3}  />
                        )
                    }
                </div>
            </>
            }
            <LoaderComponent />
        </>
    )
}

export default CountriesContainer;
