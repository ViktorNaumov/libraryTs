import React from 'react';

const BookWindow = (props:any) =>{
    let f =()=>{
        props.show()
    }

    return(
        <div className="darck" onClick={f}>
            <div className="darckContainer">
                <div className="cover"><img src={props.cover_i ? `http://covers.openlibrary.org/b/id/${props.cover_i}-L.jpg`:`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} alt="cover"></img></div>
                <div className="params"><b>название: </b>{props.title}</div>
                <div className="params"><b>автор: </b>{props.author_name? props.author_name[0]:"неизвестно"}</div>
                <div className="params"><b>год первой публикации: </b>{props.first_publish_year}</div>
                <div className="params"><b>издательство: </b>{props.publisher}</div>
                <div className="params"><b>IBSN: </b>{props.isbn}</div>
            </div>
        </div>
    )
}

export default BookWindow;

