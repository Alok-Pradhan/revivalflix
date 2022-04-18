import React ,{useState, useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import {Row,Col,Card} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AllMovie(){
    let history = useHistory();
    const [all,setAll] = useState([])
    let [page, setPage] = useState(1);

    function gotoPrevious(){
       setPage(page-1);
    }
    function gotoNext(){
       setPage(page+1);
    }

    useEffect(()=>{
        AOS.init({   
            duration: 2000
          })
    //   const api_key = "8ea23a0293467867870a3f96aa7b8e53";
     
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=1268590fd0b518ebdddbeb4a3e70199c&language=en-US&page="+page).then((response)=>{
            response.json().then((resp)=>{
                console.warn(resp)
              setAll(resp.results);
            })
        })
    },["https://api.themoviedb.org/3/tv/top_rated?api_key=1268590fd0b518ebdddbeb4a3e70199c&language=en-US&page="+page])
        
    // /discover/movie?sort_by=popularity.desc

    return(
        <>
       
        <Row className="mt-2 justify-content-around  mx-3 center" id="container" >
                {
                    all?.map((item)=>
                            
                    <Col xs={5} md={4} lg={2} className="px-0 ">
                        <Row className="justify-content-center ">
                            <Card data-aos="fade-up" className="bg-dark text-white mb-3 zoom1 px-0" style={{width:"12rem",borderRadius:"15px"}} onClick={()=>{history.push({pathname:`/tvData/${item.id}`, search:item.original_name})}}>
                            <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" style={{borderRadius:"15px"}} />
                        
                                <div className="row justify-content-center info">
                                    <i class="far fa-play-circle" style={{fontSize:"2rem"}}></i>
                                    <p className="m-0">{item.original_title}{item.original_name}</p>
                                    <small style={{fontSize:"0.6rem"}}>{item.vote_average} .<i class="fas fa-heart text-danger mt-1 mx-1"></i>{item.vote_count} . {item.original_language}</small>
                                </div>

                            </Card>
                        </Row>
                    </Col>
                     )
                } 
               
        </Row>
        <nav aria-label="Page navigation ">
            <ul class="pagination justify-content-center">
            <li class="page-item p-0" className={(page == 1?"page-item p-0 disabled":"page-item p-0")}><a className=" page-link" onClick={gotoPrevious}>Previous</a></li>
            <li class="page-item p-0"><a className=" page-link" onClick={()=>{setPage(1)}}>1</a></li>
            <li class="page-item p-0" ><a className=" page-link" onClick={()=>{setPage(2)}}>2</a></li>
            <li class="page-item p-0"><a className=" page-link" onClick={()=>{setPage(3)}}>3</a></li>''
            <li class="page-item p-0"><a className=" page-link" onClick={()=>{setPage(4)}}>4</a></li>
            <li class="page-item p-0" ><a className=" page-link" onClick={()=>{setPage(5)}}>5</a></li>
            <li class="page-item p-0"><a className=" page-link" onClick={()=>{setPage(6)}}>6</a></li>
            <li class="page-item p-0"><a className=" page-link" onClick={gotoNext}>Next</a></li>
            </ul>
      </nav>
        </>
    )
}

