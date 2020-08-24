import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const params = useParams();
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    return (
       <p> Details page : Imdb ID {params.imdbID}</p>
    )
}
/*

import React, { useEffect } from 'react';
//import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card/Card';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

import { baseUrl, axiosHeaders } from '../../utils/constants';


export default function DetailsPage() {
    const params= useParams();
    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`
    const [Details, setDetails] = useEffect('');

    useEffect(() => {
        axios.get(uri, axiosHeaders)
        .then(response => setDetails(response.data))
        .catch(err=> console.log(err))
    } , []);
    return (
        <p> Details page : Imdb ID {params.imdbID}</p>
     )
}

//export default function DetailsPage() {
//    const params = useParams();
//    /**
//     * Call server with imdbID
//     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
//     * const imdbID = params.imdbID;
//     */
//    
//}*/