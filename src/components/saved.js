import React, { Component } from 'react';
import DataList from './dataList';
import Link from './link';

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            saved: []
        }
    }

    unSave(key) {
        const items = Object.values({...localStorage}).map((item) => JSON.parse(item));
        this.setState({ saved: items });
    }

    componentDidMount() {
        const items = Object.values({...localStorage}).map((item) => JSON.parse(item));
        this.setState({ saved: items });
    }

    render() {
        const { saved } = this.state;

        const noData = <h1>No saved data</h1>;
        const data = <DataList data={this.state.saved} unSave={(key) => this.unSave(key)} /> ;
        
        return (
            <div className="saved" >
                <div className="link"><a href="/">Home</a></div>
                {saved.length ? data : noData}
            </div>
        );
    }
}   

export default Saved;