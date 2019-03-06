import React from 'react';

const Link = ({ isHomePage }) => (
    <div className="link">
        {isHomePage ? <a href="/saved">Saved</a> : <a href="/">Home</a>}
    </div>
);

export default Link;