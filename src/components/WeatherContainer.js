import React from 'react';
import useFetch from '../hooks/useFetch';
import WeatherLouder from './loader/WeatherLouder';
import WeatherInfo from './WeatherInfo';

const WeatherContainer = ({ lat, lng }) => {
    const key= 'bcfb95d01ba304e4c5ee06918b503a92';

    const { loading, data: {
        name,
        sys,
        weather,
        clouds,
        main,
        wind
    }} = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`);

    return (
        <>
        { loading ?
                <WeatherLouder />
            :
            <WeatherInfo
                city={ name }
                country={ sys.country }
                weather={ weather[0].description }
                wind={ wind.speed }
                clouds={ clouds.all }
                pressure={ main.pressure }
                icon={ weather[0].icon }
                temp={ main.temp }
            />
        }
        </>
    )
}

export default WeatherContainer;
