import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getArtistInfo } from '../api';


const ArtistPage = () => {

    const [ artist, setArtist ] = useState({});
    const id = useParams();
    
    useEffect(() => {
        const artistInfo = async () => {
            getArtistInfo(id.artist)
            .then(res => {
                setArtist(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            });
        };
        artistInfo();
    }, []);


    return (
        <div className="text-center">
            <h2>{artist.name}</h2>
            <img className="artist-image" src={artist.image} alt={artist.name} />
            <div className="artist-meta">
                <a href={artist.shareurl} target="_blank">Visit Artist</a>
            </div>
        </div>
    );
};

export default ArtistPage;