import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import data from '../../data.json';
import { CartContext } from '../../context/CartContext'

const Cardcomp = ({ dataForPro }) => {

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (id, e) => {

        const products = Object.keys(data).map((key, ind) => data[key])
        const product = products.filter(item => item.id === id)

        let obj = {};

        for (let i = 0; i < product.length; i++) {
            obj = {
                id: product[i].id,
                name: product[i].name,
                price: product[i].price,
                img: product[i].img,
                qty: 1,
                subTotal: product[i].price
            }

        };
        addToCart(obj);

    }
    if (!dataForPro) {
        return (
            <Container>

                <Row>
                    {Object.keys(data).map((key, ind) => {
                        if (ind <= 5) {
                            return (
                                <Col lg={4} md={6} className="p-3" key={ind}>
                                    <Card style={{ width: '18rem' }} className="shadow bg-white rounded m-auto">
                                        <Card.Img variant="top" src={data[key].img} />
                                        <Card.Body>
                                            <Card.Title>{data[key].name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>
                                            <Card.Text>
                                                Price: ${data[key].price}
                                            </Card.Text>
                                            <p><Button variant="primary" onClick={(e) => { handleAddToCart(data[key].id, e) }} style={{ marginLeft: '65px' }}>Add to cart</Button></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        return null;

                    })
                    }
                </Row>

            </Container>
        )

    }
    else {
        return (
            <Container>
                <Row>
                    {Object.keys(data).map((key, ind) => {
                        if (ind >= 6) {
                            //console.log(data[key],ind)
                            return (
                                <Col lg={4} md={6} className="p-3" key={ind}>
                                    <Card style={{ width: '18rem' }} className="shadow bg-white rounded m-auto">
                                        <Card.Img variant="top" src={data[key].img} />
                                        <Card.Body>
                                            <Card.Title>{data[key].name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                        </Card.Text>
                                            <Card.Text>
                                                Price: ${data[key].price}
                                            </Card.Text>
                                            <p><Button variant="primary" onClick={(e) => { handleAddToCart(data[key].id, e) }} style={{ marginLeft: '65px' }}>Add to cart</Button></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        return null;

                    })
                    }
                </Row>
            </Container>

        )
    }
}

export default Cardcomp;
