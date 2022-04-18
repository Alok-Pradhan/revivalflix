import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Link, Switch, } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Button, Modal, Row, Col, Card, } from "react-bootstrap";

import Home from "./Movies.jsx";
import About from "./About.jsx";
import Player from "./Player.jsx";
import Mdata from "./Mdata.jsx";
import logo from "../assets/popcorn.png";
import Login from "./Login.jsx";
// import history from "./history";
import AllMovie from './AllMovies';
import TvData from './TvData';
import TvPlayer from './TvPlayer';

function Navbars() {
    const [search, setSearch] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [print, setPrint] = useState(false);
    const [data, setData] = useState();

    // let history = useHistory();

    function getData(e) {
        console.log(e.target.value);
        setData(e.target.value);
    }


    function showData() {
        let input = data;
        let len = input.length;
        console.log(len);
        if (len > 0) {
            setPrint(true);
            fetch(
                ` http://www.omdbapi.com/?s=${data}&apikey=9f5e5150`
            ).then((response) => {
                response.json().then((resp) => {
                    setSearch(resp.Search);
                    console.log(resp.Search);
                });
            });
        } else {
            setPrint(false);
        }
    }

    return (
        <div>
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand={false}>
                        <Container fluid>
                            <Navbar.Brand className="mx-2" as={Link} to={"/"}>
                                <div className="d-flex">
                                    <img src={logo} alt="logo" width="40px" />
                                    <p className="mt-2 m-0"> Revival Flix</p>
                                </div>
                            </Navbar.Brand>
                            <div class="d-flex">
                                <Nav.Link variant="muted me-2 px-0" onClick={() => {
                                    setLgShow(true);
                                }}>
                                    <i class="fas fa-search text-white " style={{ fontSize: "1.5rem" }}></i>

                                </Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                    <i class="fas fa-user-circle text-white" style={{ fontSize: "1.5rem" }}></i>
                                </Nav.Link>

                                <Navbar.Toggle aria-controls="offcanvasNavbar" className="p-0 border-0" />
                            </div>
                            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo} alt="logo" width="30px" />
                                        <small className="mt-2 m-0 text-dark"> Revival Flix</small> </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link as={Link} to={"/Home"}> Home </Nav.Link>
                                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                        <Nav.Link as={Link} to={"/login"} exact> Login</Nav.Link>
                                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                            <NavDropdown.Item href="#action3"> Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">  Something else here </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>

                <div>
                    <Switch>
                        <Route exact path="/" component={() => <Redirect to="/Home" />} />
                        <Route path="/login">  <Login /></Route>
                        <Route path="/Home"> <Home /></Route>
                        <Route path="/about"> <About /></Route>
                        <Route path="/allMovies">  <AllMovie /></Route>
                        <Route path="/mdata/:id"> <Mdata /></Route>

                        <Route path="/player/:id"> <Player /></Route>
                        <Route path="/tvPlayer/:id"> <TvPlayer /></Route>
                        <Route path="/tvData/:id"> <TvData /></Route>

                        <Route path="/Revival_Pictures"> <Home /></Route>

                        <Route path="*"> <AllMovie /> </Route>
                    </Switch>
                </div>



                <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <h3>Search Movies/series</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2 w-75" aria-label="Search" onChange={getData} />
                            <Button variant="success" className="w-25" onClick={showData} ><i class="fas fa-search"></i></Button>
                        </Form>

                        {print ? (
                            <Row className="mt-2 justify-content-between mx-4">
                                {search?.map((item) => (
                                    <Col className="p-0 ">
                                        <Nav.Link as={Link} to={`/mdata/${item.imdbID}`}>
                                            <Card className=" text-white mb-3 zoom1" style={{ width: "12rem" }} onClick={() => { setLgShow(false) }}>
                                                <Card.Img src={item.Poster} alt="Card image" />

                                                <div className="row justify-content-center info  mx-3">
                                                    <i class="far fa-play-circle" style={{ fontSize: "2rem" }}></i>
                                                    <p className="m-0">{item.Title}</p>
                                                    <small style={{ fontSize: "0.6rem" }}>{item.Year} . {item.Type} . {item.imdbID}</small>
                                                </div>
                                            </Card>
                                        </Nav.Link>
                                    </Col>
                                ))}
                            </Row>
                        ) : null}
                    </Modal.Body>
                </Modal>
            </Router>


        </div>
    );
}

export default Navbars;
