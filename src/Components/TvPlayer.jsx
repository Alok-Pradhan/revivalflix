/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect}from 'react';
import {useHistory,useParams} from 'react-router-dom';


export default function tvPlayer(){
    let history = useHistory();
    console.log(history);
    let season_no = history.location.search.slice(1);
    console.log(season_no);
    let episode_no = history.location.hash.slice(1);
    console.log(episode_no);
    let {id} = useParams();
    console.log(id);

    const [imdb, setImdb] =useState("https://imdbembed.xyz/tv/imdb/"+id+'-'+season_no+'-'+episode_no)
    console.log(imdb);
    
    return(
        <iframe src={imdb} width="100%" class="player" frameborder="0" allowfullscreen></iframe>
    );
}