import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeView from './Views/HomeView'
import CountryView from './Views/CountryView';
import NotFoundView from './Views/NotFoundView';

import './Style/AppStyle.css'

const CountriesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='country/:code'  element={<CountryView />} />
            <Route path='*' element={<NotFoundView />} />
        </Routes>
    )
}

export default CountriesApp;
