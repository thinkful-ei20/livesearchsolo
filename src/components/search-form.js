import React from 'react';

export default function SearchForm(props) {
  

  return(
    <div>
      Search
      <input 
      type="search"
      id="search"
      name="search"
      placeholder='John Smith'
      onChange={props.renderChange}
      >
      </input>
    </div>
  );
}