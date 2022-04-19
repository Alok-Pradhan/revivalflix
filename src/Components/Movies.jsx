import React , {useState,useEffect} from 'react';
import {Carousel,Row,Card,Button,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link,Switch,useHistory} from 'react-router-dom';
import "../Style/Movies.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

function Movies(){
    const [toggle,setToggle] = useState([]);
    const[upcoming,setUpcoming] = useState([]);
    const[movies,setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    let caraousel_img = [
                          {
                            Name:"The Kashmir files",
                            Image:"https://i.ytimg.com/vi/Dc-Lf4NvmJY/maxresdefault.jpg",
                            Plot:"Interviews about the exodus of Kashmiri Hindus in 1990.",
                            Genre:"Action",
                            Year:"2022",
                            imdbId:"tt10811166",
                            Duration:"2hr 30min",
                          },
                          {
                            Name:"Radhe Shyam",
                            Image:" https://images.indianexpress.com/2020/10/Beats-Of-Radhe-Shyam-1200.jpg",
                            Plot:"Radhe Shyam is a romantic drama set in Europe in the 1970s starring Prabhas and Pooja Hegde in prominent roles.",
                            Genre:"Action",
                            Year:"2022",
                            imdbId:"tt8960382",
                            Duration:"2hr 28min",
                          },
                          {
                            Name:"RRR",
                            Image:" https://filmfare.wwmindia.com/content/2020/mar/rrr11585126792.jpg ",
                            Plot:"A tale of two legendary revolutionaries and their journey far away from home. After journey they return home to start fighting  against British colonialists in the 1920s.",
                            Genre:"sports/drama",
                            Year:"2022",
                            imdbId:"tt8178634",
                            Duration:"2hr 32min",
                          },
                        ];
                        console.log(caraousel_img )
    let history = useHistory();

    useEffect(()=>{
      AOS.init({
        duration : 1500
      })
      // https://api.tvmaze.com/shows
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&page=2").then((response)=>{
            response.json().then((resp)=>{
                setToggle(resp.results);
                console.log(toggle);
            })
        })
  
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&page=1").then((response)=>{
          response.json().then((resp)=>{
              setUpcoming(resp.results);
              console.log(resp);
          })
      })
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=52a18783ed514602a5facb15a0177e61&language=en-US&page=1").then((response)=>{
          response.json().then((resps)=>{
              setMovies(resps.results);
              console.log(resps.results);
          })
      })
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=52a18783ed514602a5facb15a0177e61&language=en-US").then((response)=>{
        response.json().then((resps)=>{
          console.log(resps.results);
          setPopular(resps.results);
        })
      })
    },[])

    return(
        <div className="pt-4" style={{backgroundColor: 'black'}}>
       <Carousel indicators={true} controls={true} >
            {
              caraousel_img.map((item)=>(
                <Carousel.Item interval={25000} >
                  
                <img 
                  className="d-block  img"
                  src={item.Image}
                  alt="First slide" height="500px"
                />
                <Carousel.Caption>
                  <h3 class="text">{item.Name}</h3>
                  {/* <p>{item.Plot}</p> */}
                  <Row className="  mt-3 btns">
                     <div className="d-flex justify-content-center">
                     <Button variant="danger" className="" onClick ={()=>{history.push(`/mdata/${item.imdbId}`)}} ><FontAwesomeIcon icon={faCircleInfo} /> <span className="none">Details</span></Button>
                       <Button variant="danger" className=" mx-3 text-white" onClick={()=>{history.push({pathname:`/player/${item.imdbId}`,})}}><FontAwesomeIcon icon={faPlayCircle} /> <span className="none">Watch</span> </Button> 
                       <Button variant="danger" className=""><FontAwesomeIcon icon={faPlus} /> <span className="none">Watchlist</span></Button> 
                     </div>
                    </Row>  
                </Carousel.Caption>
              </Carousel.Item>
             
              )
              )
            }
          </Carousel>

      <div>
          <Row className=" mt-5 d-flex justify-content-between  w-100">
            <Col lg={2} md={4} xs={6}>
            <p className="text-white border-bottom  mx-3">Popular Series</p>
            </Col>
            <Col  lg={2} md={2} xs={2} >
              <Row className="justify-content-end me-2"> 
                <Col lg={2} md={2} xs={2} >
                  <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><FontAwesomeIcon icon={faChevronRight} /></Button>
                </Col>
              </Row>
            </Col>
            </Row>

            <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    upcoming?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/tvData/${item.id}`, search:item.original_name})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
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


    <div>
      <Row className=" mt-5  d-flex justify-content-between w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom ">Upcoming Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
          <Row className="justify-content-end me-2"> 
              <Col lg={2} md={2} xs={2} >
                <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><FontAwesomeIcon icon={faChevronRight} /></Button>
              </Col>
            </Row>
        </Col>
      </Row>
    
      <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    popular?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`, search:item.original_title})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
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

    
    <div>
    <Row className=" mt-5 d-flex justify-content-between  w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom  mx-3">Web Series</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><FontAwesomeIcon icon={faChevronRight} /></Button>
            </Col>
          </Row>
        </Col>
        </Row>
    
        <div className="mt-2 justify-content-between center pt-3   " id="container">
                {
                toggle.map((item)=>
                <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/tvData/${item.id}`, search:item.original_name})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
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




        <div >
        <Row className=" mt-5 d-flex justify-content-between  w-100">
        <Col lg={2} md={4} xs={6}>
        <h5 className="text-white border-bottom  mx-3">Popular Movies</h5>
        </Col>
        <Col  lg={2} md={2} xs={2}>
        <Row className="justify-content-end me-2"> 
            <Col lg={2} md={2} xs={2} >
              <Button variant="danger" onClick={()=>{history.push("/allMovies")}}><FontAwesomeIcon icon={faChevronRight} /></Button>
            </Col>
          </Row>
        </Col>
        </Row>
    
              {/* <div className="mt-2  justify-content-between center pt-3">
                {
                movies.map((item)=>
                    <Col className="mx-4">
                      <Row className="justify-content-center ">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem",borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`,search:item.id})}}>
                    <Card.Img src={item.image} alt="Card image" style={{borderRadius:"15px"}}/>
                
                    <div className="row justify-content-center info" >
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                        <p className="m-0">{item.title}</p>
                        <small style={{fontSize:"0.6rem"}}>{item.year} . <i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.imDbRating} . {item.imDbRatingCount}</small>
                    </div>

                    </Card>
                    </Row>
                    </Col>
                )

                }
              </div> */}
            <div className=" justify-content-between  center pt-4 " id="container" style={{backgroundColor:"black"}}>
                {
                    movies?.map((item)=>
                    <div  className="mx-4">
                    <Row className="justify-content-center">
                    <Card  className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem" , borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/mdata/${item.id}`, search:item.original_title})}}>
                    <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                
                    <div className="row justify-content-center info">
                        <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
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

    </div>
    )
}
export default Movies;