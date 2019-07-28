import React,{useState} from 'react';
import './index.css';

export default ({search,value,sort,sortBy}) => {
    let [title, changeTitle] = useState(value);
    let [options,changeOptions] = useState(false)
    return <div className="search-options">
        <div className="main-options">
            <input value={title} onChange={({ target: { value } }) => { console.log(value); changeTitle(value) }} className="classic-input" placeholder="book title ex:Harry Potter" />
            <button className="search" onClick={()=>search(title)}>
                <i className = "fa fa-search"/>
            </button>
            <button className="search-options-toggle" onClick={()=>changeOptions(prev=>!prev)}>
                <i className = {"fa fa-caret-"+(options?"up":"down")}/>
            </button>
        </div>
        {options && <div className="options-content">
            Sort by <select value={sortBy} onChange={({target:{value}})=>sort(value)}>
                <option value="title">name</option>
                <option value="price">price</option>
                <option value="average_rating">rating</option>
            </select>
        </div>}
    </div>
}