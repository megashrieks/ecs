import React, { useState,useEffect } from 'react';
import "./index.css"
import BookItem from '../BookItem'
export default ({books}) => {
    const items_to_show = 3;
    let [page, changePage] = useState(0);
    const totalPages = Math.ceil(books.length / items_to_show);
    useEffect(() => {
        console.log("book changed")
        changePage(0)
    }, [books])
    let data = books.slice(page * items_to_show, (page + 1) * items_to_show);
    console.log(page * items_to_show, (page + 1) * items_to_show);
    console.log(data[0]&&Object.keys(data[0]))
    return <div className="search-result">
        <div className="page-info">
            <div style={{ width: "50%" }}>
                showing page <b>{page+1}</b> of <b>{totalPages}</b>
            </div>
            <div style={{ width: "25%" }}/>
            <div style={{width:"25%",textAlign:"right"}}>
                {page != 0 && <button
                    onClick={() => changePage(page => Math.max(page -1, 0))}>
                    <i className = "fa fa-arrow-left"/>
                </button>}
                {page <= totalPages-2 && <button
                    onClick={() => changePage(page => Math.min(page + 1, totalPages))}>
                    <i className="fa fa-arrow-right" />
                </button>}
            </div>
        </div>
        <div className="result-data">
            {data.map(book => <BookItem key={book.bookID} data={book}/>)}
        </div>
    </div>
}