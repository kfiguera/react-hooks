import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div className="Search">
            <input type="text" placeholder="Search" value={search} ref={searchInput} onChange={handleSearch}/>
        </div>
    );
}

export default Search;