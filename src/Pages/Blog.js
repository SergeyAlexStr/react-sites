import React from "react";
import {Container, Media, Row, Col, ListGroup, Card} from "react-bootstrap";

export default class Blog  extends React.Component{
    render() {
        return(
          <Container>
                <Row>
                    <Col md ={9}>
                        <Media className = 'm-5 p-4'>
                            <img width={150} height={150} className='mr-3'
                            src = 'https://previews.123rf.com/images/stefaninahill/stefaninahill1503/stefaninahill150300021/38732808-atom-symbol.jpg'
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur deleniti, fugit in incidunt
                                    laborum maiores molestiae mollitia nisi non officia officiis perferendis quibusdam quis ratione recusandae sit ut?
                                </p>
                            </Media.Body>
                        </Media>   <Media className = 'm-5 p-4'>
                            <img width={150} height={150} className='mr-3'
                            src = 'https://previews.123rf.com/images/stefaninahill/stefaninahill1503/stefaninahill150300021/38732808-atom-symbol.jpg'
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur deleniti, fugit in incidunt
                                    laborum maiores molestiae mollitia nisi non officia officiis perferendis quibusdam quis ratione recusandae sit ut?
                                </p>
                            </Media.Body>
                        </Media>   <Media className = 'm-5 p-4'>
                            <img width={150} height={150} className='mr-3'
                            src = 'https://previews.123rf.com/images/stefaninahill/stefaninahill1503/stefaninahill150300021/38732808-atom-symbol.jpg'
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur deleniti, fugit in incidunt
                                    laborum maiores molestiae mollitia nisi non officia officiis perferendis quibusdam quis ratione recusandae sit ut?
                                </p>
                            </Media.Body>
                        </Media>   <Media className = 'm-5 p-4'>
                            <img width={150} height={150} className='mr-3'
                            src = 'https://previews.123rf.com/images/stefaninahill/stefaninahill1503/stefaninahill150300021/38732808-atom-symbol.jpg'
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur deleniti, fugit in incidunt
                                    laborum maiores molestiae mollitia nisi non officia officiis perferendis quibusdam quis ratione recusandae sit ut?
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md = '3'>
                       <h5 className='text-center mt-5 p-2' >Category</h5>
                       <Card className = 'm-3' >
                           <ListGroup variant = 'flush'>
                               <ListGroup.Item>HTML</ListGroup.Item>
                               <ListGroup.Item>CSS</ListGroup.Item>
                               <ListGroup.Item>JS</ListGroup.Item>
                               <ListGroup.Item>React</ListGroup.Item>
                           </ListGroup>
                       </Card>
                        <Card className = 'mt-3' bg ='lite'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci impedit magnam neque non odio praesentium quasi
                                        voluptatem? Ad adipisci doloribus ea eos et excepturi, laborum nemo nesciunt non qui quod recusandae sint temporibus totam, voluptas?
                                        Aut blanditiis corporis cupiditate ipsum itaque nihil perferendis rem sed!
                                    </p>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
              </Container>
        )

    }

}