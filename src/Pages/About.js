import React from "react";
import {Tab, Container, Row, Nav, Col} from "react-bootstrap";

export default class About  extends React.Component{
    render() {
        return(
           <Container>
               <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm ={3}>
                            <Nav variant = 'pills' className = 'flex-column mt-2' >
                                <Nav.Item>
                                    <Nav.Link eventKey = "first" >Design</Nav.Link>
                                </Nav.Item><Nav.Item>
                                    <Nav.Link eventKey = "second" >Team</Nav.Link>
                                </Nav.Item><Nav.Item>
                                    <Nav.Link eventKey = "third" >Programming</Nav.Link>
                                </Nav.Item><Nav.Item>
                                    <Nav.Link eventKey = "fourth" >Frameworks</Nav.Link>
                                </Nav.Item><Nav.Item>
                                    <Nav.Link eventKey = "fifth" >Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                        <Col sm={9}>
                            <Tab.Content className = 'mt-50'>
                            <Tab.Pane eventKey = 'first'>
                                <img src='http://publicatom.ru/rosenergo/images/reaktor5-big.jpg'  alt = 'reactor'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'second'>
                                <img src='https://images.unsplash.com/photo-1539806199005-6805484f2f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='null'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'third'>
                                <img src='https://images.unsplash.com/photo-1428470885187-79d626b649cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80' alt='null'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'fourth'>
                                <img src='https://images.unsplash.com/photo-1512758923373-a210c19a574a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' alt='null'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'fifth'>
                                <img src='https://images.unsplash.com/photo-1510475558697-e4e084ab26a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80' alt='null'/>
                                <p>Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                                <p>Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Debitis earum id, impedit ipsum maxime necessitatibus nulla odio officiis omnis quidem reprehenderit sit unde, vero! Debitis.</p>
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
               </Tab.Container>
           </Container>
        )

    }

}