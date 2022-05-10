import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExplore } from "../api";

const ExporeSpecificGenre = () => {
    const [genre, setGenre] = useState([]);
    const g = useParams();

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
        getTheGenre(g.genre);
    }, []);
    return (
        <div className="specific-genre-explore-container">
            <h2 className="text-center">{g.genre.charAt(0).toUpperCase() + g.genre.slice(1)}</h2>
        </div>
    );
};

export default ExporeSpecificGenre;