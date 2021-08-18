const fetch = require('node-fetch');
const apiUrl = 'https://api.jamendo.com/v3.0/';
const api = (term) => {
    return new Promise((resolve, reject) => {
        if (term.meta === 'artist') {
            const res = fetch(`${apiUrl}/artists/?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=${term.limit}&order=joindate_desc`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No artists found');
                }
            });
        }
        if (term.meta === 'tracks') {
            const res = fetch(`${apiUrl}/artists/${term.meta}?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=${term.limit}`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No tracks found');
                }
            });
        }
        if (term.meta === 'albums') {
            const res = fetch(`${apiUrl}/artists/${term.meta}?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=${term.limit}`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No albums found');
                }
            });
        }
        if (term.meta === 'playlists') {
            const res = fetch(`${apiUrl}/playlists/?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=${term.limit}&order=creationdate_desc`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No playlists found');
                }
            });
        }
        if (term.meta === 'locations') {
            const res = fetch(`${apiUrl}/artists/${term.meta}?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=all`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No location found');
                }
            });
        }
        if (term.meta === 'musicinfo') {
            const res = fetch(`${apiUrl}/artists/${term.meta}?client_id=42a786e1&format=jsonpretty&namesearch=${term.term}&limit=all`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No music info found');
                }
            });
        }
        if (term.allTracks) {
            const res = fetch(`${apiUrl}/tracks/?client_id=42a786e1&format=jsonpretty&limit=all&order=releasedate_desc`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No Tracks found 1');
                }
            });
        } else if(term.allTracks || term.onlyTracks) {
            const res = fetch(`${apiUrl}tracks/?client_id=42a786e1&format=jsonpretty&limit=${term.limit}&order=releasedate_desc`);
            res.then(result => result.json()).then(json => {
                if (json.headers.results_count > 0) {
                    resolve(json.results);
                } else {
                    reject('No Tracks found 2');
                }
            });
        }

        if (term.getPlaylist) {
            const res = fetch(`${apiUrl}playlists/tracks/?client_id=42a786e1&format=jsonpretty&id=${term.playlist}`);
            res.then(result => result.json()).then(json => {
                if (json.headers.status === 'success') {
                    resolve(json.results);
                } else {
                    reject('No playlist tracks found');
                }
            });
        }

        if (term.user) {
            const res = fetch(`${apiUrl}users/?client_id=42a786e1&format=jsonpretty&name=${term.user}`);
            res.then(result => result.json()).then(json => {
                if(json.headers.status === 'success') {
                    resolve(json.results);
                } else {
                    reject('No user found');
                }
            });
        }

        if (term.feed) {
            const res = fetch(`${apiUrl}feeds/?client_id=42a786e1&format=jsonpretty&id=${term.user}&lang=en`);
            res.then(result => result.json()).then(json => {
                if(json.headers.status === 'success') {
                    resolve(json.results);
                } else {
                    reject('No feed found');
                }
            });
        }

        if (term.onlyArtist) {
            const res = fetch(`${apiUrl}feeds/?client_id=42a786e1&format=jsonpretty&id=${term.user}&lang=en`);
            res.then(result => result.json()).then(json => {
                if(json.headers.status === 'success') {
                    resolve(json.results);
                } else {
                    reject('No feed found');
                }
            });
        }
    });

};


module.exports = api;
