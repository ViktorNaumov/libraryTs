import React from 'react';



const Block = (props:any)=>{
    let f =()=>{
        props.show(props.index)    
    }
    return(
        <div className="block" onClick={f} >
            <div className="left">
                <div className="img"><img src={props.cover_i ? `http://covers.openlibrary.org/b/id/${props.cover_i}-L.jpg`:`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} alt="cover"/></div>
            </div>
            <div className="right">
                <div className="name"><b>название: </b>{props.title}</div>
                <div className="author"><b>автор: </b>{props.author_name? props.author_name[0]:"неизвестно"}</div>
            </div>
        </div>
    )
}

export default Block;