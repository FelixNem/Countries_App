import React, { useState } from 'react';
import ModalComponent from './modal/ModalComponent';
import WeatherContainer from './WeatherContainer';

import '../Style/Components/CountryInfoStyle.css';
import TableInfo from './TableInfo';

const CountryInfo = ({name, officialName, capital, flag, languajes, population, demonym, currencies, region, subRegion, area, capitalInfo}) => {
    const [ShowWeather, setShowWeather] = useState(false);

    return (
        <div className='infoContainer' >
            <div className='countryData' >
                <h2> {name} </h2>
                <TableInfo
                    officialName={ officialName }
                    capital={ capital }
                    languajes={ languajes }
                    population={ population }
                    demonym={ demonym }
                    currencies={ currencies }
                    region={ region }
                    subRegion={ subRegion }
                    area={ area }
                />
                <button
                    className='btn btn-outline-dark weatherBtn'
                    onClick={() => setShowWeather( true ) }
                >
                    Get Waether Capital
                </button>
            </div>
            <div className='countryFlag' >
                <img alt={`Flag of ${name}`} src={flag} />
            </div>
            { ShowWeather &&
                <ModalComponent
                    show ={ ShowWeather }
                    setShow ={ setShowWeather }
                >
                    <WeatherContainer lat={capitalInfo.latlng[0]} lng={capitalInfo.latlng[1]} />
                </ModalComponent>
            }
        </div>
    )
}

export default CountryInfo;
