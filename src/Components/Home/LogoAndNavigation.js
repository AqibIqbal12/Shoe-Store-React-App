import React, { useContext } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Style from './LogoAndNavigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function LogoAndNavigation({ activeProduct, inActive }) {
   
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const quantities = cart.map((item) => item.qty);
    let numOfItems = 0;
    if (quantities.length) numOfItems = quantities.reduce((total, q) => total + q);

    return (
        <Container fluid={true}>
            <Row>
                <Col sm={4}>
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className={Style.my_logo} />
                </Col>
                <Col sm={8}>
                    <Navbar collapseOnSelect expand="sm">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={Style.my_navbar_toggle} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={Style.my_nav}>
                                <Link to="/" className={!activeProduct && !inActive ? Style.my_navlink + " " + Style.my_navlink_active : Style.my_navlink}> Home </Link>
                                <Link to="/product" className={activeProduct === "product" ? Style.my_navlink + " " + Style.my_navlink_active : Style.my_navlink}> Product </Link>
                                <Link to="" className={Style.my_navlink}> About Us </Link>
                                <Link to="" className={Style.my_navlink}> Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <button className={Style.btn_cart} onClick={() => navigate("/cart")}> <i className="fa fa-shopping-cart" style={{ }} aria-hidden="true"><span style={{  }}>{numOfItems}</span></i></button>

                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}
