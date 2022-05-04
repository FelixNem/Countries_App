import React from 'react';
import CountriesContainer from '../components/CountriesContainer';
import NavBar from '../components/NavBar';

const HomeView = () => {
    return (
        <>
            <NavBar isHome={true} />
            <CountriesContainer />
        </>
    )
}

export default HomeView;
