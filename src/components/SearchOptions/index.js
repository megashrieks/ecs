import React,{useState} from 'react';
import './index.css';

export default ({search,value}) => {
    let [title, changeTitle] = useState(value);
    return <div className="search-options">
        <div className="main-options">
            <input value={title} onChange={({ target: { value } }) => { console.log(value); changeTitle(value) }} className="classic-input" placeholder="book title ex:Harry Potter" />
            <button className="search" onClick={()=>search(title)}>
                <i className = "fa fa-search"/>
            </button>
            <button className="search-options-toggle">
                <i className = "fa fa-caret-down"/>
            </button>
        </div>
    </div>
}