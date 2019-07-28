import React from 'react';
import "./index.css";

const Stars = ({ value }) => {
    return <div className="stars-container">
        {new Array(5).fill(0).map((_, index) => {
            return <i className={"fa fa-star" + ((index+1) < value ? " active" : "")}/>
        })}  ({value})
    </div>
}

export default ({ data: { title,authors,average_rating,ratings_count,price } }) => {
    return <div className="book-item">
        <div className="book-image"><div className="centered">{title[0]}</div></div>
        <div className="book-details">
            <div className="book-title">{title}</div>
            <div className="book-authors">By {authors}</div>
            <div className="stars">
                <Stars value={average_rating} />
                rated by {ratings_count} people
            </div>
            <div className="book-price">{price} <i className = "fa fa-rupee-sign"/></div>
        </div>
    </div>
}