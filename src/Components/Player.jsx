import React , {useState, useEffect}from 'react';
import  {useParams} from "react-router-dom";
import "../Style/First.css";

export default function Player(props){
    // let history =  useHistory();
    // console.log(history)
    let{id} = useParams();
    const [imdb,setImdb] = useState('https://imdbembed.xyz/movie/imdb/'+id) 
    return(
        <>
        <iframe src={imdb} width="100%" class="player" frameborder="0" allowfullscreen></iframe>
            
    </>
    )
}
