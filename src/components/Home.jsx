import React, { Component } from "react";
import items from "../data/fantasy.json";
// import items from "../data/history.json";
// import items from "../data/horror.json";
// import items from "../data/romance.json";
// import items from "../data/sci-fi.json";
import { Container, Row, Col, Card, Nav, Button, Breadcrumb} from "react-bootstrap";

class Home extends Component {
  render() {
    console.log("myItems", items);

    return (
      <Container>
        <Row className="justify-content-center mt-3" >
          <Col xs={4}>
            <h1>welcome to read.io</h1>
            <p className="lead">The best books you can find on the web!</p>
            <hr className="my-2" />
  
            
              {items.map((item) => (
               <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={item.img} />
               <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                 <Card.Text>
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
                 </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
               </Card.Body>
             </Card>
              ))}
          
            {/* <Carousel>
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
