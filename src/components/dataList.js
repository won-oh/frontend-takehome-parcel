import React from 'react';
import PropTypes from 'prop-types';
import DataItem from './dataItem';

const DataList = ({ data, unSave }) => {
    const dataItems = data ? 
        data.map(d => 
            <DataItem key={d.gem_uri} data={d} onUnsave={(key) => unSave(key)} />) 
        : null;

    return (
        <div className="data-list">
            { dataItems }
        </div>
    )
}

DataList.prototype = {
    data: PropTypes.array
}

export default DataList;