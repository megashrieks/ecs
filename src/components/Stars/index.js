import React from 'react';
export default ({ value }) => {
    return <div className="stars-container">
        {new Array(5).fill(0).map((_, index) => {
            return <i key={index} className={"fa fa-star" + ((index + 1) < value ? " active" : "")} />
        })}  ({value})
    </div>
}