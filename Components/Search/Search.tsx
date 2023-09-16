import React from "react";

const Search = () => {
  return (
    <div>
      <form className='search'>
        <input
          className='searchInput'
          type='search'
          placeholder='Search for News'
        />
      </form>
    </div>
  );
};

export default Search;
