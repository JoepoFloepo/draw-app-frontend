import React from 'react';
import classes from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={classes.searchBar}>
            <div className={classes.container}>
                <input/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;