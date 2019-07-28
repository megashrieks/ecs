import React from 'react';
import './index.css';

export default () => {
    return <div className="search-options">
        <div className="main-options">
            <input className="classic-input" placeholder="book title ex:Harry Potter" />
            <button className="search">
                <i className = "fa fa-search"/>
            </button>
            <button className="search-options-toggle">
                <i className = "fa fa-caret-down"/>
            </button>
        </div>
    </div>
}