import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputValue = (e)=> {

        setInputValue(e.target.value);
    }

    const handleSubmit = async(e)=> {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            try {
                
                const resp =await axios.get(`https://restcountries.com/v3.1/name/${ encodeURI(inputValue) }`)
                const {data} = resp;
                navigate('country/' + data[0].cca3)
            } catch (error) {

                navigate('country/NotFound/' + inputValue )
            }
        }
        
        setInputValue('');
    }

    return (
        <form className='formContainer' onSubmit={handleSubmit}>
            <input
                className='form-control'
                placeholder='Search a Country'
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

export default SearchBox;
