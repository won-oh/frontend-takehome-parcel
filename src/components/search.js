import React, { Component } from 'react';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    submit(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.onSearch(this.state.searchText);
    }
    
    render() {
      return (
          <form onSubmit={e => this.submit(e)} className="search-form" >
            <input 
                type="search" 
                placeholder="Search Gems..." 
                onChange={(e) => this.setState({ searchText: e.target.value }) }  
            />
            <button type="submit">Search</button>
          </form>
      )
    }
}

export default SearchForm;