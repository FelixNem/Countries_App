import React from 'react';

const TableInfo = ({officialName, capital, languajes, population, demonym, currencies, region, subRegion, area}) => {

    const languajesArr = Object.entries( languajes );
    const currenciesArr = Object.entries( currencies );

    return (
        <table className='infoCountryTable' >
            <tbody>
                <tr>
                    <td className='tableData' > Official Name: </td>
                    <td> {officialName} </td>
                </tr>
                <tr>
                    <td className='tableData' > Capital: </td>
                    <td> {capital} </td>
                </tr>
                { languajes &&
                    <tr>
                        <td className='tableData' > {languajesArr.length > 1 ? 'Languajes' : 'Languaje' }: </td>
                        <td> {languajesArr.map((languaje)=> <li key={languaje[0]}> {languaje[1]} </li>)} </td>
                    </tr>
                }
                { currencies &&
                    <tr>
                        <td className='tableData' > {currenciesArr.length > 1 ? 'Currencies': 'Currency' }: </td>
                        <td> {currenciesArr.map(([key, {name, symbol}])=> <li key={key} > {`${symbol}: ${name}`} </li>)} </td>
                    </tr>
                }
                <tr>
                    <td className='tableData' > Population: </td>
                    <td> {population} { `${demonym}s` } </td>
                </tr>
                <tr>
                    <td className='tableData' > Region: </td>
                    <td> {region} </td>
                </tr>
                <tr>
                    <td className='tableData' > Subregion: </td>
                    <td> {subRegion} </td>
                </tr>
                <tr>
                    <td className='tableData' > Area: </td>
                    <td> {`${area} Km`}<sup>2</sup> </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableInfo;
