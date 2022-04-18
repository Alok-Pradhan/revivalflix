import React , {useState,useEffect} from "react";
import {Row, Col,Form,Button} from "react-bootstrap";
import connect from '../assets/connect.png';
import select from '../assets/select.png';
import enjoy from "../assets/popcorn.png";
import "../Style/Login.css";

function Login(){
    const [signup , setSignup] = useState(false);
    const [input , setInput] = useState('');
    const [show, setShow] = useState(false);


   useEffect(()=>{
    console.log(input);
        if(input === ""){
            setShow(false);
        }else{
            setShow(true)
        }

    if(input === 'bsn123'){
        setSignup(true)
        console.log(signup);
    }
    else{
        setSignup(false)
        console.log(signup)
    }
   },[input, signup])

   function login(){
        return(
            <>
            <Form.Group className="mb-3 "  controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Enter your Password"/>
            </Form.Group>
            <Button variant = "danger">Sign In</Button>
            </>
        )
   }

   function signUp(){
        return(
            <>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 "  controlId="formBasicName">
                            <Form.Control type="text" placeholder="Firstname"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3 "  controlId="formBasicLast">
                            <Form.Control type="text" placeholder="LastName"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3 "  controlId="formBasicMobile">
                    <Form.Control type="number" placeholder="mobile"/>
                </Form.Group>
                <Form.Group className="mb-3 "  controlId="formBasicMobile">
                    <Form.Control type="Password" placeholder="*****"/>
                </Form.Group>
                <Button variant= "danger ">Sign Up</Button>
            </>
        )
   }
    return(
        <div className="" style={{backgroundColor: "black"}}>
        <Row className="d-flex justify-content-center py-5">
            <Col lg={4} md={12} className="bg-danger p-5" style={{borderRadius:"15px 0 0px 15px"}}>
              <Row className="">
              <div className="d-flex justify-content-center my-4">
                    <img src={connect} alt="" width="70px"/>
                    <div className="mx-3 ">
                        <h3 className="m-0 text-white">Connect</h3>
                        <p>Connect To revival pictures</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-4  mx-5">
                    <img src={select} alt="" width="70px" />
                    <div className="mx-3">
                        <h3 className="m-0 text-white">Select</h3>
                        <p>Make your Sort List</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <img src={enjoy} alt="" width="70px" />
                    <div className="mx-3">
                        <h3 className="m-0 text-white">Revive</h3>
                        <p>Revive Again , hurray :)</p>
                    </div>
                </div>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={4} className="bg-white" style={{borderRadius:"0 15px 15px 0"}}>
                <h5 className="text-dark px-5 mb-4 mt-4"> <span>Login</span> or <span>Sign Up </span> with your email address </h5>
                <Form className="bg-white px-5">
                            <Form.Group className="mb-3 "  controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>{setInput(e.target.value)}} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                           {
                               show?<div>
                               {
                                       signup? login(): signUp()    
                                   }
                               </div>:null
                           }
                </Form>
                <Row className="justify-content-center mt-2">
                    <p className="m-0">Connect with other platforms :</p>
                    <div className="" style={{fontSize:"2.5rem"}}>
                    <i class="fab fa-facebook-square text-primary"></i>
                    <i class="fab fa-google-plus-square ms-2 text-danger"></i>
                    <i class="fab fa-twitter-square mx-2 text-info"></i>
                    <i class="fab fa-reddit-square text-warning"></i>
                    </div>
                </Row>
            </Col> 
        </Row>
        </div>
    )
}
export default Login;