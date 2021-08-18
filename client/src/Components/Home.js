import React, {useEffect, useState} from 'react';
import { getTracks , getTen} from '../api';
import FeaturedTracks from "./FeaturedTracks";
import FeaturedPlaylists from "./FeaturedPlaylists";
import FeaturedArtists from './FeaturedArtists';
import FeaturedAlbums from './FeaturedAlbums';
const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        getTen('artist')
            .then(res => {
                setArtists(res.data);
            });
        getTen('albums')
            .then(res => {
                setAlbums(res.data);
            });
        getTen('playlists')
            .then(res => {
                setPlaylists(res.data);
            });

        getTracks(false, 20)
            .then(res => {
                setTracks(res.data);
            })
    }, []);
    return (
        <div className="grid-layout">
            <div className="featured tracks-playlists">
                <FeaturedTracks tracks={tracks} />
                <FeaturedPlaylists  playlists={playlists} />
            </div>
            <div className="featured artists-albums">
                <FeaturedArtists artists={artists} />
                <FeaturedAlbums albums={albums} />
            </div>
        </div>
    );
};

export default Home;
