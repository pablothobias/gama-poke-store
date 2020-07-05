import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.scss'

import PokeCard from '../poke-card'

const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://pokeapi.co/api/v2/pokemon?limit=10',
            );

            setData(result.data.results);
        };

        fetchData();
    }, []);

    return (
        <div className="content">
            {
                data.map(item => (
                    <PokeCard key={item.url} pokeUrl={item.url}></PokeCard>
                ))
            }
        </div>
    );
};

export default Main;