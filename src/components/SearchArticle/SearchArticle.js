import './SearchArticle.css';
import React, { useState} from 'react';

const SearchArticle = ({ searchArticle, setSearchArticle }) => {
  
  const handleSearch = (event) => {
    setSearchArticle(event.target.value)
  }

  return (
    <form className='SearchArticle'>
      <input
        className='search'
        type='search'
        placeholder='search article by title'
        value={searchArticle}
        onChange={handleSearch}
      />
    </form>
  )
}

export default SearchArticle;
