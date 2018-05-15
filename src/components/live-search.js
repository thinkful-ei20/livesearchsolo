import React from 'react';

import CharacterCount from './character-count'
import CharacterList from './character-list'


export default class LiveSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x: 123
    }
  }

  render() {
    console.log('live-search.js rendering. this.state.x=: ', this.state.x)

    return(
      <div>
        

        <CharacterCount count={this.props.characters.length} />

        <CharacterList list={this.props.characters} />

      </div>
    );
    
  }

}