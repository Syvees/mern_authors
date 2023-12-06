import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const AuthorsList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors") // GET ALL
        .then(res => {
            console.log(res.data);
            setAuthors(res.data);
        })
        .catch((err) => {console.log(err)});    
    }, [])

const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
        .catch((err) => {console.log(err)});    
    } 

const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h3><Link to={"/authors/new"}>Add an Author</Link></h3>
            {
                authors.map((author, index) => { // ITERATE ON ARRAY OF OBJECTS
                    return (
                        <div key={index}> 
                            <Link to={`/authors/${author._id}`}>{author.name}</Link>
                            <Link to={"/authors/edit/" + author._id}> Edit </Link>
                            <button onClick = {e => {deleteAuthor(author._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorsList;