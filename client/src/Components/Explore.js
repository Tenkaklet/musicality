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
            return <div className="specific-genre" key={i}><p>{genre}</p></div>;
        });
    return (
        <>
            <header>
                <h1>Explore</h1>
            </header>
            <div className="explore-container">
                <ul className="genres-container">
                    {listGenres}
                </ul>
            </div>
        </>
    );
};

export default Explore;
