import React ,{useEffect,useState} from 'react';
import {Row,Col,Button,DropdownButton,Dropdown,Card} from "react-bootstrap";
import {useHistory,useParams} from "react-router-dom";
import "../Style/TvData.css";

export default function TvData(props){

    let history = useHistory();
    const [data,setData] = useState({});
    const [season, setSeason] = useState([]);
    const [seasonNo , setSeasonNo] = useState(1);
    const [episodeData, setEpisodeData] = useState([]);
    const [imageUrl, setImageUrl] = useState("https://image.tmdb.org/t/p/w500")
    let {id} = useParams();
    console.log(id);
    console.log(history);


    function getEpisodes(season_number){
        // console.log(season_number);
        setSeasonNo(season_number);
    }

    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&append_to_response=episode_groups`).then((response)=>{
            response.json().then((resps)=>{
                // console.log(resps);
                setSeason(resps.seasons);
                
            })
        })
        fetch(`https://www.omdbapi.com/?t=${history.location.search}&plot=short&apikey=9f5e5150`).then((response)=>{
            response.json().then((resps)=>{
                console.log(resps);
                // console.log("tv data milila");
                setData(resps);
            })
        })

        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNo}?api_key=52a18783ed514602a5facb15a0177e61&language=en-US`).then((response)=>{
            response.json().then((resps)=>{
                console.log(resps);
                setEpisodeData(resps.episodes);
            })
        })

    },[`https://api.themoviedb.org/3/tv/${id}/season/${seasonNo}?api_key=52a18783ed514602a5facb15a0177e61&language=en-US`])
    // console.log(episodeData);



    return(
        <>
        <div className="bg" style={{backgroundImage: `url(${data.Poster})`, backgroundRepeat:' no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <Row className="py-5 mx-0 blurry" >
            <Col  className="p-0">
                        <div className="mt-5 ms-3 pt-2" data-aos="zoom-in">
                            <img src={data.Poster} alt="" style={{opacity:"1",filter:"opacity(100%)"}} />
                        </div>
                </Col>
                <Col xs={12}  md={6} className="p-0 px-4 py-5 mt-0 me-5">
                
                        <div className="d-flex"> 
                            <p className="border mx-3 p-1 rounded text-white">{data.Rated}</p>
                            <p className="border p-1 rounded text-white">{data.Type}</p>
                        </div>
                        
                    <Row className=" ">
                        <h1  className="text-white mb-3 bold" >{data.Title}</h1>
                       
                            <Col >
                            
                                <p  className="mb-3 plot " >{data.Plot}</p>   
                            </Col>  

                            <div>
                                <div className="d-flex text-white text-center">
                                <h5 className="m-0  px-2 ">&nbsp;&nbsp;{data.Genre}</h5> |
                                <h5>&nbsp; {data.Runtime}</h5>
                            </div>
                            
                                
                            <Row className="text-white mt-3">
                                <Col>
                                    <div>
                                        <h5>Actors</h5>
                                        <small className="m-o">{data.Actors}</small>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h5>Director</h5>
                                        <small className="m-o">{data.Director}</small>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <h5>Writer</h5>
                                        <small className="m-o">{data.Writer}</small>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                       
                        <div className="d-flex px-4 mt-5">
                            <Button variant="danger" className="px-5 rounded-pill" onClick={()=>{history.push({pathname:"/player",search:data.imdbID})}}>Watch Now</Button>
                            <Button variant="outline-danger mx-3 px-4" className="rounded-pill text-white">+ My List</Button>
                        </div>

                    </Row>

                    <Row className="pt-3">
                       <Col md={3} lg={3} sm={3}>
                       <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">seasons</Dropdown.Toggle>
                            <Dropdown.Menu>
                            {season.map((data) => (
                                <Dropdown.Item onClick={()=>getEpisodes(data.season_number)}>{data.name}</Dropdown.Item>
                            ))}   
                            </Dropdown.Menu>
                        </Dropdown>
                       </Col>
                    </Row>
                    
                   

                </Col> 
            
                <div class=" justify-content-between text-white center">
                       
                            {
                                episodeData?.map((datas) => (
                                   
                                   <Row className="mx-3 justify-content-center">
                                    <Card style={{ width: '25rem',backgroundColor:"rgba(150, 57, 57, 0.748)" }}  className=" text-white text-center px-0" onClick={()=>{history.push({pathname:`/tvPlayer/${data.imdbID}`,search:`${seasonNo}`,hash:`${datas.episode_number}`})}}>
                                    <Card.Img variant="top" src={`${imageUrl}${datas.still_path}`} class={datas.still_path == null?'bg':""} alt="Image not aviliable"/>
                                    <Card.ImgOverlay>
                                      <Card.Title>{datas.name}</Card.Title>
                                      <Card.Text as ="p" className="text-white text-center">
                                        {datas.overview.slice(0,300)}
                                      </Card.Text>
                                    </Card.ImgOverlay>
                                  </Card>
                                    </Row>
                               
                                ))
                            }
                </div>
            </Row>
           
          </div>
        </>
    )
}