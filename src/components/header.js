import React from "react";
import {Navbar, Container, Nav, FormControl, Form, Button} from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
export default class Header extends React.Component {
    render() {
        return (
            <>
                    <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Brand href='/'>
                                <img src={logo}
                                     height='30'
                                     width='30'
                                     className='d-line-block align-top'
                                    alt = "Logo"
                                />  React site
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controlos='responsive-navbar-nav'/>
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className='mr-auto'>
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href='/about'>About</Nav.Link>
                                    <Nav.Link href='/contacts'>Contacts</Nav.Link>
                                    <Nav.Link href='/blog'>Blog</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl
                                        type='text'
                                        placeholder='Search'
                                        className='mr-sm-2'
                                    />
                                    <Button variant='outline-info'

                                    >Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                <Router>
                <Switch>
                    <Route exact path='/' components={Home}/>
                    <Route exact path='/about' components={About}/>
                    <Route exact path='/contacts' components={Contacts}/>
                    <Route exact path='/blog' components={Blog}/>
                </Switch>
                </Router>
            </>
        );
    }

};