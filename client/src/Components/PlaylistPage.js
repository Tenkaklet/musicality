import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { getPlaylistTracks, getUser, getFeed } from "../api";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";


const PlaylistPage = () => {
    const [tracks, setTracks] = useState([]);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [feed, setFeed] = useState([]);
    const id = useParams();
    useEffect(() => {
        getPlaylists();
        
    }, []);
    const pla = useContext(PlayerContext);

    const getPlaylists = async () => {
        getPlaylistTracks(id.playlistId)
            .then(res => {
                setTracks(res.data[0].tracks);
                setTitle(res.data[0].name);
                getUser(res.data[0].user_name)
                    .then(data => {
                        setUser(data.data[0]);
                    });
            });
        getFeed(id.playlistId)
            .then(res => {
                setFeed(res.data);
            })
    };

    const trackList = tracks.map((track, number) => {
        return (
            <li key={track.id}>
                <p> {number + 1} <img src={track.image} alt={track.artist_name} /> {track.name} <i className="far fa-play-circle" onClick={() => pla.setSong(track.audio)}></i></p>
            </li>
        );
    });
    return (
        <div className="grid-layout">
            <div className="playlist-wrapper">
                <div className="playlist-meta">
                    <h2>{title}</h2>
                    <img src={user.image} alt={user.dispname} />
                    <p>Created by: {user.dispname}</p>
                </div>
                <ul className="track-list">
                    {trackList}
                </ul>
            </div>
            <aside className="editorial-info">
                <h2>Editorial</h2>
                {feed}
            </aside>
        </div>
    );
};

export default PlaylistPage;
