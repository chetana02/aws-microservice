var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//    
//    res.send('Express is the best!!!! and so is Chetana');
//    //res.send('Chetana is the best!!!!');
//    
//});

const OMDB_API_KEY = 'e3ec511b';
const OMDB_URL = 'http://www.omdbapi.com/';

/* IMDB Search */
router.get('/', (req, res, next) => {
    const title = req.query.title
    const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
    axios.get(url)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.send(err)
        })
});

/* Single IMDB Movie */
router.get('/imdb/:imdbId', (req, res, next) => {
    const imdbId = req.params.imdbId
    const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
    axios.get(url)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.send(err)
        })
})


module.exports = router;
