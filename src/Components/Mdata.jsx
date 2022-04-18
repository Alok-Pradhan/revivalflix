import React , {useEffect,useState} from 'react';
import {useHistory , useParams} from 'react-router-dom';
import {Row,Col,Button,Card} from 'react-bootstrap';
import "../Style/Mdata.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {useLocation} from "react-router-dom";

export default function Mdata(props){
    let history = useHistory();
    let {id} = useParams();
    console.log(id);
    const [lastid , setlastId] = useState("");
    console.log(lastid);
     const [src, setSrc] = useState('https://www.omdbapi.com/?i='+id+'&plot=short&apikey=9f5e5150')
     const [data,setData] = useState({});
     const [popular , setPopular] = useState([]);
    let BaseUrl = {src};
    console.log(history);


    // function reloadData(){debugger
    //     if(id !== lastid){
    //         alert("get the new id");
    //         fetch(`https://www.omdbapi.com/?t=${history.location.search}&plot=short&apikey=9f5e5150`).then((response)=>{
    //             response.json().then((resp)=>{
    //                 console.log(resp);
    //                 setData(resp);
    //             })
    //         })
    //     }
    // }

    useEffect(() => {
        AOS.init({   
            duration: 2000
          })
    console.log(BaseUrl);
         
              fetch(`https://www.omdbapi.com/?i=${id}&plot=short&apikey=9f5e5150`).then((response)=>{
                  response.json().then((resp)=>{
                    //   console.log(resp);
                      setData(resp);
                    //   console.log(data)
                      setlastId(id);
                  })
              })
         

          if(id !== lastid){
            fetch(`https://www.omdbapi.com/?t=${history.location.search}&plot=short&apikey=9f5e5150`).then((response)=>{
                response.json().then((resp)=>{
                    console.log(resp);
                    setData(resp);
                })
            })
        }
        
        fetch("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=52a18783ed514602a5facb15a0177e61&language=en-US").then((response)=>{
            response.json().then((resps)=>{
                // console.log(resps.results);
                setPopular(resps.results)
            })
        })

    },[`https://www.omdbapi.com/?t=${history.location.search}&plot=short&apikey=9f5e5150`])
    return(
        <>

    {/* selected movie details starts */}

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
                            <Button variant="danger" className="px-5 rounded-pill" onClick={()=>{history.push({pathname:`/player/${data.imdbID}`,})}}>Watch Now</Button>
                            <Button variant="outline-danger mx-3 px-4" className="rounded-pill text-white">+ My List</Button>
                        </div>

                    </Row>
                    <Row>

                    </Row>
                </Col>
              
            </Row>
          </div>


  {/* selected movie details ends */}



  {/* recommanded movies in a line starts */}

        <div>
            <Row className="  d-flex justify-content-between  w-100" style={{backgroundColor:"black"}}>
            <Col lg={2} md={4} xs={6}>
            <h5 className="text-white border-bottom  mx-3">Recommended Movies</h5>
            </Col>
            <Col  lg={2} md={2} xs={2}>
            <Row className="justify-content-end "> 
                <Col lg={2} md={2} xs={2} >
                <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><i class="fas fa-chevron-right"></i></Button>
                </Col>
            </Row>
            </Col>
            </Row>

            <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    popular?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`,search:item.title})}} >
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}} ></i>
                        <p className="m-0">{item.original_title}{item.original_name}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.vote_average} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.vote_count} . {item.original_language}</small>
                    </div>

                    </Card>
                    </Row>
                    </div>
                    )

                }
            </div>
        </div>

  {/* recommanded movies in a line ends */}

        
        </>
    )
}



