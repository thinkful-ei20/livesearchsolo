import React from 'react';

import CharacterCount from './character-count';
import CharacterList from './character-list';
import SearchForm from './search-form';



export default class LiveSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch(e){
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    })
  }



  render() {
    const filteredList = this.props.characters.filter((char)=> {
      return char.name.toLowerCase().includes(this.state.searchTerm)||char.actor.toLowerCase().includes(this.state.searchTerm)
              
    })

    return(
      <div>
        <SearchForm renderChange= {(e) => this.handleSearch(e)}/>

        <CharacterCount count={this.props.characters.length} />

        <CharacterList list={filteredList} />

      </div>
    );
    
  }

}