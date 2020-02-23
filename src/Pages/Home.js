import React from "react";
import CarouselBox from '../components/CaruselBox/CarouselBox.js'
import {Button, Card, CardDeck, Container} from "react-bootstrap";

export default class Home  extends React.Component{

    render() {
        return(
            <>
            <CarouselBox/>
                <Container>
                    <h2 className= 'text-center m-4'>Our team</h2>
                    <CardDeck className = 'm-4'>
                        <Card>
                            <Card.Img
                                className = 'p-1'
                                variant = 'top'
                                src = 'https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                                />
                            <Card.Body>
                                <Card.Title>Commands sports</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in minima nostrum odio quis quod?</p>
                                </Card.Text>
                                <Button variant='primary' >About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Commands sports</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in minima nostrum odio quis quod?</p>
                                </Card.Text>
                                <Button variant='primary' >About Team</Button>
                            </Card.Body>
                            <Card.Img
                                className = 'p-1 mt-7'
                                variant = 'bottom'
                                src = 'https://images.pexels.com/photos/38631/bobsled-team-run-olympics-38631.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                            />
                        </Card>
                        <Card>
                            <Card.Img
                                className = 'p-1'
                                variant = 'top'
                                src = 'https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                            />
                            <Card.Body>
                                <Card.Title>Commands war</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in minima nostrum odio quis quod?</p>
                                </Card.Text>
                                <Button variant='primary' >About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )

    }

}