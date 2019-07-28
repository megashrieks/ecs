import React from 'react';
import "./index.css";
import Stars from '../Stars';
import { Link } from 'react-router-dom';


export default ({ data: { bookID, title, authors, average_rating, ratings_count, price } }) => {
    return <Link className="book-item" to = {"/book/"+bookID}>
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
    </Link>
}