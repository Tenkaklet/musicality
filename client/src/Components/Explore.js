import React, { useEffect, useState } from "react";
import { getExplore } from "../api";
import { useHistory } from "react-router-dom";


const Explore = () => {
    const history = useHistory();
    const listOfGenres = ['rock', 'reggae', 'pop', 'soul'];
    
    const onChangeGenre = (genre) => {
        history.push('/specific/' + genre);
    };

    const listGenres = listOfGenres.map((genre, i) => {
            return <div className="specific-genre" key={i} onClick={() => onChangeGenre(genre)}><p>{genre}</p></div>;
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
