import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArtist } from '../api';

const ArtistPage = () => {
    const id = useParams();
    console.log(id);
    return (
        <div></div>
    );
};

export default ArtistPage;