const express = require('express');
const api = require('../api');
const router = express.Router();

router.post('/all/:meta', (req, res, next) => {
    api({
        meta: req.params.meta,
        term: req.body.artist,
        limit: req.body.limit
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

router.post('/tracks', (req, res) => {
    api({
        allTracks: req.body.allTracks,
        limit: req.body.limit,
        onlyTracks: true
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/playlist', (req, res) => {
    api({
        playlist: req.body.playlist,
        getPlaylist: true
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/user', (req, res) => {
    api({
        user: req.body.user
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/feeds', (req, res) => {
    api({
        feedId: req.body.feedId,
        feed: true
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/artist', (req, res) => {
    api({
        artistId: artist,
        onlyArtist: true
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    });
});

router.post('/artistinfo', (req, res) => {
    api({
        artistInfo: true,
        id: req.body.id
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/explore', (req, res) => {
    api({
        explore: true,
        genre: req.body.genre
    }).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
});



module.exports = router;
