import React from 'react';

export default function CharacterCount(props) {
  return(
    <div className='character-count'>
      {props.count} characters
    </div>
  );
}