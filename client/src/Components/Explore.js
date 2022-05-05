import React, { useEffect, useState } from "react";
import { getExplore } from "../api";


const Explore = () => {
    const [genre, setGenre] = useState([]);
    const getTheGenre = async (g) => {
        getExplore(g)
            .then(res => {
                console.log(g.toUpperCase());
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };
    useEffect(() => {
        getTheGenre('rock');
        getTheGenre('reggae');
        getTheGenre('pop');
        getTheGenre('soul');
    }, []);
    const listOfGenres = ['rock', 'reggae', 'pop', 'soul'];
    const listGenres = listOfGenres.map((genre, i) => {
            return <li key={i}><p>{genre}</p></li>;
        });
    return (
        <>
            <header>
                <h1>Explore</h1>
            </header>
            <div>
                <ul className="genres-container">
                    {listGenres}
                </ul>
            </div>
        </>
    );
};

export default Explore;
