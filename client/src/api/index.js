import jamendo from "./jamendo";
import axios from "axios";

export const getAll = async (meta) => {
    return await jamendo.post('/all/' + meta , {
        artist: '',
        limit: 'all'
    });
};

export const getTen = async (meta) => {
    return await jamendo.post('/all/' + meta , {
        artist: '',
        limit: 10
    });
};

export const getTracks = async (allTracks, limit) => {
    return await jamendo.post('/tracks', {
        allTracks: allTracks,
        limit
    });
};

export  const getPlaylistTracks = async (id) => {
    return await axios.post('/api/playlist', {
        playlist: id
    });
};

export const getUser = async user => {
    return await axios.post('/api/user', {
        user
    });
};

export const getFeed = async feedId => {
    return await axios.post('/api/feeds', {
        feedId
    });
};

export const getArtist = async artist => {
    return await axios.post('/api/artist', {
        artist
    });
};


