import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArtist } from '../api';

const ArtistPage = () => {
    const id = useParams();
    console.log(id);
    return (
        <div>
            <h1>Artist Page #{id.artist}</h1>
        </div>
    );
};

export default ArtistPage;