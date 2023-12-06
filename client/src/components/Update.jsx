import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState();
    const navigate = useNavigate();

    useEffect(() => { // TO UPDATE THE STATE WITH CURRENT DB VALUES
        axios.get("http://localhost:8000/api/authors/" + id)
        .then(res => {
            setName(res.data.name);
            })
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/authors/" + id, {
            name,
        })
        .then(res => {
            console.log(res);
            navigate("/authors")
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <h1>Favorite Authors</h1>
        <h3><Link to={"/authors"}>Home</Link></h3>
        <h3>Edit this Author</h3>
        <form onSubmit={updateAuthor}>
            <p>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </p>
            <Link to={"/authors"}>Cancel </Link>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default Update;  