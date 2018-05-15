import React from 'react';

export default function CharacterList(props) {
  
  const wholeList = props.list.map((character,i) => 
    <li>
      <strong>{character.name}</strong> {character.actor} --- {character.description}
    </li>
  );

  return(
    <ul>
      {wholeList}
    </ul>
  );
}