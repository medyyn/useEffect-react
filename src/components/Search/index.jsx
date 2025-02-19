import React from 'react'

const Search = ({inpValue, setInpValue}) => {
  return (
    <div>
        <input 
        type="search" 
        value={inpValue }
        className="search-input" 
        placeholder='search...'
        onChange={(e) => {
            setInpValue(e.target.value);
        }}
        />
    </div>
  )
}

export default Search