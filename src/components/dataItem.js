import React from 'react';
import PropTypes from 'prop-types';

const save = (data) => {
    localStorage.setItem(data.gem_uri, JSON.stringify(data));
};

const unSave = (key, onUnsave) => {
    localStorage.removeItem(key);
    if (onUnsave)
        onUnsave();
};
 
const DataItem = ({ data, onUnsave }) => {
    return (
        <div className="data-item">
            <div className="data-information">
                <h2 className="data-name">{data.name}<span className="data-version">{data.version}</span></h2>
                <span className="data-download">{(data.downloads).toLocaleString('en-US')}</span>
            </div>
            <div className="data-information">
                <p className="data-name"><span>Author: </span>{data.authors}</p>
                <span className="data-download-text">DOWNLOADS</span>
            </div>
            <div className="data-information">
                <p className="data-info">{data.info}</p>
                <div className="data-button">
                    <button onClick={() => save(data)}>Save</button>
                    <button onClick={() => unSave(data.gem_uri, onUnsave)}>Unsave</button>
                </div>
            </div>
            <hr />
        </div>
    )
};

DataItem.prototype = {
    data: PropTypes.object
}

export default DataItem;