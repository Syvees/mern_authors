import React, { useEffect, useState } from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate()
    
    const onSubmitHandler = e => {
        e.preventDefault();

        // MAKE A POST REQUEST TO CREATE A NEW AUTHOR -- CREATE
        axios.post("http://localhost:8000/api/authors", {
            name // SHORTCUT FOR name: name
        })
        .then(res => {
            console.log(res);
            console.log(res.data)
            navigate("/authors")

        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h3><Link to={"/authors"}>Home</Link></h3>
            <h3>Add a new Author</h3>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name: </label>
                <input type="text" onChange = {e => setName(e.target.value)}></input>
            </p>
            <Link to={"/authors"}>Cancel </Link>
            <input type="submit"></input>
        </form>
        </div>

    )
}

export default AuthorForm;