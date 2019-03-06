import React, { Component } from 'react';
import SearchForm from './search';
import DataList from './dataList';
import Link from './link';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            data: []
        }
    }

    search(text) {
        console.log(text);
        fetch(`http://localhost:3000/api/v1/search.json?query=${text}`)
            .then(res => res.json())
            .then(result => {
                this.setState({ data: result });
            });
    }

    render() {
        return (
            <div className="home">
                <div className="link"><a href="/saved">Saved</a></div>   
                <hr />
                <SearchForm onSearch={(text) => this.search(text)} />
                {this.state.data && 
                    <DataList 
                        data={this.state.data} 
                        onUnsave={(key) => this.unsave(key)}
                    />}
            </div>
        );

    }
}

export default Home;