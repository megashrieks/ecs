import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
let Context = createContext();

let fetch_data = () => new Promise((resolve, reject) => {
    let details = localStorage.getItem("books");
    if (details) 
        resolve(JSON.parse(details));
    else
        axios.get("/books")
            .then(response => {
                localStorage.setItem("books", JSON.stringify(response.data));
                resolve(response.data);
            })
            .catch(reject)
});

let BookDetailProvider = ({ children }) => {
    let [bookDetails,changeDetails] = useState([]);
    useEffect(() => {
        fetch_data()
            .then(data => {
                changeDetails(data);
            })
            .catch(console.error);
    }, []);
    return <Context.Provider value={{
        bookDetails
    }}>
        {children}
    </Context.Provider>
}


export {Context,BookDetailProvider}