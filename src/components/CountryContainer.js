import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import CountryInfo from './CountryInfo';

const CountryContainer = () => {
    const {code} = useParams();
    const {loading, data:[country]} = useFetch(`https://restcountries.com/v3.1/alpha/${code}`);

    return (
        <>
            {!loading &&
                code !== 'ATA'?
                    <CountryInfo
                        name={country.name.common}
                        officialName={country.name.official}
                        capital={country.capital[0]}
                        flag={country.flags.svg}
                        languajes={country.languages}
                        population={country.population}
                        demonym={country.demonyms.eng.m}
                        currencies={country.currencies}
                        region={country.region}
                        subRegion={country.subregion}
                        area={country.area}
                        capitalInfo={country.capitalInfo}
                    />
                :
                    <h2>Not Avaible Data</h2>
            }
        </>
    )
}

export default CountryContainer;
