import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
    <header id="header-content">
        <h1>PokeStore</h1>
        <div id="search-content">
            <input type="text" placeholder="Search for a Pokemón" />
            <button>
                <FontAwesomeIcon icon={faHome} />
            </button>
        </div>
    </header>
);

export default Header;