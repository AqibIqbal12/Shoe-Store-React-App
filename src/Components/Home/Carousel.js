import React, {useState}  from 'react'
import { Container, Row, Carousel } from 'react-bootstrap';
// import Style from './Carousel.Module.css';


const Carouselcomp = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        // console.log(selectedIndex);
        setIndex(selectedIndex);
    };

    return (
        <>
        <Container fluid={true}>
            <Row>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/carouselimages/image1.jpg"} alt="First slide"/>
                        <Carousel.Caption  style={{color:'black'}}>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/carouselimages/image2.jpg"} alt="First slide"/>
                        <Carousel.Caption  style={{color:'black'}}>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption >
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/carouselimages/image3.jpg"} alt="First slide"/>

                        <Carousel.Caption  style={{color:'black'}}>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                               </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

        </Container>
        <h1 style={{textAlign:'center'}}>New Arrivals</h1>
        </>
    );
}

export default Carouselcomp;
