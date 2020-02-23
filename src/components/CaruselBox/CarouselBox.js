import React from "react";
import Carousel from "react-bootstrap/Carousel";
import buildingImg from '../../assets/buildings.jpg'
import forestImg    from  '../../assets/forest.jpg'
export  default class CarouselBox  extends  React.Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={buildingImg}
                        alt = 'buid'
                    />
                    <Carousel.Caption>
                        <h3>Building City</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus?</p>
                    </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={forestImg}
                        alt = 'forest'
                    />
                    <Carousel.Caption>
                        <h3>Forest City</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatibus?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }

}