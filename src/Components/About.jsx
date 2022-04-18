import React from 'react';
import bg1 from '../assets/about_bg2.svg';
import "../Style/About.css";
import {Button,Row,Col,Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Logo from "../assets/popcorn.png";
function About(){
  let history = useHistory();
    return(
      <div className="pb-0" style={{backgroundColor:"black"}}>
       <div className="first text-white" style={{textAlign:"left"}}> 
         <div className="ps-5 py-3" style={{backdropFilter:"blur(30px)"}}>
         <p style={{fontSize:"1.5rem",fontWeight:"bold"}} className="m-0 ps-5">OUR PROJECT</p>
          <p style={{fontSize:"5rem",fontWeight:"bold"}} className="m-text-white ps-5">ABOUT <span style={{fontWeight:"normal"}}>US</span> </p>
          <Button className="ms-5" variant="danger" onClick={()=>history.push('/')}><i class="fas fa-film" ></i> Find Your Choice</Button>
         </div>
      </div>
      <div className="second container">
            <Row className="text-white pt-4 ">
              <Col xs={6} md={4} lg={4} className="mt-5" style={{textAlign: 'left'}}>
                <p style={{fontSize:'1.5rem',fontWeight:'bold'}} className="m-0 text-danger">About Us</p>
                <p style={{fontSize:'3rem'}} className="m-0">All The <span>Perks</span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum qui doloribus similique non ipsum sint </p>
              </Col>
          
                <Col xs={6} md={4} lg={8}>
                    <Row className="border border-danger border-4 p-3  text-white">
                          <Col >
                            <div style={{textAlign: 'left'}}>
                              <h3>lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                            </div>
                            <div style={{textAlign: 'left'}}>
                              <h3>lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                            </div>
                              <div style={{textAlign: 'left'}}>
                                <h3>lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                              </div>
                          </Col>
                          <Col>
                            <div style={{textAlign: 'left'}}>
                              <h3>lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                            </div>
                            <div style={{textAlign: 'left'}}> 
                              <h3>lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                            </div>
                            <div style={{textAlign: 'left'}}>
                              <h3>lorem ipsum</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit!</p>
                            </div>
                          </Col>
                    </Row>                                      
                </Col>
            </Row>

            <div className="px-5 pt-3 text-white">
              <p>OUR STORY</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eligendi sed impedit harum consectetur, distinctio doloribus minima nemo atque excepturi ad natus. Aperiam, iusto quos aliquam totam nisi excepturi perferendis esse aut possimus atque nobis repellendus qui provident id laboriosam. Error, facere sit unde doloremque molestias repudiandae labore modi amet?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eligendi sed impedit harum consectetur, distinctio doloribus minima nemo atque excepturi ad natus. Aperiam, iusto quos aliquam totam nisi excepturi perferendis esse aut possimus atque nobis repellendus qui provident id laboriosam. Error, facere sit unde doloremque molestias repudiandae labore modi amet?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eligendi sed impedit harum consectetur, distinctio doloribus minima nemo atque excepturi ad natus. Aperiam, iusto quos aliquam totam nisi excepturi perferendis esse aut possimus atque nobis repellendus qui provident id laboriosam. Error, facere sit unde doloremque molestias repudiandae labore modi amet?</p>
            </div>
            <Row className="py-3">
              <Col xs={12} md={4} lg={4}>

              <Card  className="bg-dark" style={{ width: '18rem' }}>
                
                  <Card.Body className="text-white">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

              </Col>    

              <Col xs={12} md={4} lg={4}>

              <Card style={{ width: '18rem' }}>
                
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

              </Col> 

              <Col xs={12} md={4} lg={4}>

              <Card className="bg-dark" style={{ width: '18rem' }}>
                  
                  <Card.Body className="text-white">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

              </Col> 
            </Row>
        </div>
        <div className="footer py-5">
                <Row className="mt-5 pt-3 px-5">
                  <Col className="mt-3">
                      <div class="d-flex" style={{textAlign:"center"}}>
                        <img src={Logo} alt=""  width="100px"/>
                          <div className="ms-2">
                            <p className="m-0 text-white" style={{fontSize:"2rem",fontWeight:"bold"}}>Revival</p>
                            <p className="m-0 text-white" style={{fontSize:"2rem",fontWeight:"bold"}}>pictures</p>
                          </div>
                      </div>
                  </Col>

                  <Col>
                    <div className="text-white">
                    <h1>About Us</h1>
                    <p>Corrupti eligendi sed impedit harum consectetur, distinctio doloribus minima nemo atque excepturi ad natus. Aperiam, iusto quos aliquam totam</p>
                    </div>
                  </Col>

                  <Col>
                
                  </Col>

                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eligendi sed impedit harum consectetur, distinctio doloribus minima nemo atque excepturi ad natus. Aperiam, iusto quos aliquam totam </p>
                  </Col>
                </Row>
              
            </div>
      </div>
    )
}
export default About;