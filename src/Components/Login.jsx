import React , {useState,useEffect} from "react";
import {Row, Col,Form,Button} from "react-bootstrap";
import connect from '../assets/connect.png';
import select from '../assets/select.png';
import enjoy from "../assets/popcorn.png";
import "../Style/Login.css";
import {useHistory,useParams} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'

function Login(){
    const [signup , setSignup] = useState(false);
    const [input , setInput] = useState('');
    const [show, setShow] = useState(false);
    let history = useHistory();
    const [formData, setFormData] = useState({
       username:"",
    //    password:"",
    //    firstname:"",
    //    lastname:"",
    //    mobile:null
    });



const handleChange = (event) =>{
  
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,

   })
   
}

 const handleSignin =() => {
     fetch("https://localhost:44323/Authenticate/Login",{
         method:'POST',
         headers:{
             'Accept':"application/json",
             'Content-Type':'application/json',
         },
         body:JSON.stringify(formData)
     }).then((resp)=>{
        resp.json().then((response)=>{
            console.log(response);
            if(response.status === 'success'){
        history.push({pathname:"/home"});
        localStorage.setItem("loginStatus",response.status);
            }
        })
     })
 }

 const handleSignup =() => {
     console.log(formData);
 }

useEffect(()=>{
    if(formData.username === ""){
        setShow(false);
    }else{
        setShow(true);
    }

    if(formData.username === "admin"){
        setSignup(true);
        
    }else{
        setSignup(false);
    }
    
},[formData.username])



   function login(){
        return(
            <>
            <Form.Group className="mb-3 "  controlId="formBasicEmail">
                <Form.Control type="password" name="password" value={formData.passowrd} placeholder="Enter your Password" onChange={handleChange}/>
            </Form.Group>
            <Button variant = "danger"  onClick={handleSignin}>Sign In</Button>
            </>
        )
   }

   function signUp(){
        return(
            <>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 "  controlId="formBasicName">
                            <Form.Control type="text" name="firstname" value={formData.firstname} placeholder="Firstname" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3 "  controlId="formBasicLast">
                            <Form.Control type="text" name="lastname" value={formData.lastname} placeholder="LastName" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3 "  controlId="formBasicMobile">
                    <Form.Control type="number" name="mobile" placeholder="mobile" value={formData.mobile} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 "  controlId="formBasicMobile">
                    <Form.Control type="Password" name="password" placeholder="*****" value={formData.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant= "danger" onClick={handleSignup} >Sign Up</Button>
            </>
        )
   }
    return(
        <div className="" style={{backgroundColor: "black"}}>
        <Row className="d-flex justify-content-center w-100 px-3 m-0 py-5">
            <Col lg={4} md={12} sm={6} className="bg-danger py-5 px-0 left-border">
              <Row className="mx-3">
              <div className="d-flex justify-content-center my-4">
                    <img src={connect} alt="" width="70px"/>
                    <div className="mx-3 ">
                        <h3 className="m-0 text-white">Connect</h3>
                        <p>Connect To revival pictures</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-4 ">
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
            <Col xs={12} md={12} lg={4} className="bg-white p-0 right-border" >
                <h5 className="text-dark px-5 mb-4 mt-4"> <span>Login</span> or <span>Sign Up </span> with your email address </h5>
                <Form className="bg-white px-5">
                            <Form.Group className="mb-3 "  controlId="formBasicEmail">
                                <Form.Control type="email" name="username" placeholder="Enter your email" value={formData.username} onChange={handleChange} />
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
                <Row className="justify-content-center mt-0">
                    <p className="m-0">Connect with other platforms :</p>
                    <div className="" style={{fontSize:"2.5rem"}}>
                    <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
                    <FontAwesomeIcon icon={faGooglePlusG} className="ms-3 text-danger" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-3 text-info" />
                    <FontAwesomeIcon icon={faRedditAlien} className="text-primary" />
                    {/* <i class="fab fa-google-plus-square "></i>
                    <i class="fab fa-twitter-square "></i>
                    <i class="fab fa-reddit-square text-warning"></i> */}
                    </div>
                </Row>
            </Col> 
        </Row>
        </div>
    )
}
export default Login;