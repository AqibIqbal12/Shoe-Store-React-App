import React, { useContext } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import LogoAndNavigation from './Home/LogoAndNavigation';
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const { cart, deleteCartItem } = useContext(CartContext);
    const prices = cart.map((product) => product.price * product.qty);
    let totalPrice = 0
    if (prices.length) totalPrice = prices.reduce((total, p) => total + p);

    const handleDeleteCartItem = (id) => {
        console.log(id)
        deleteCartItem(id);
    }
    return (
        <>
            <LogoAndNavigation inActive="inActive"/>
            <Container>
                {cart.length > 0 ? (
                    <Table id="cart" className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th style={{ width: '50%' }}>Product</th>
                                <th style={{ width: '10%' }}>Price</th>
                                <th style={{ width: '8%' }}>Quantity</th>
                                <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                                <th style={{ width: '10%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td data-th="Product">
                                                <Row>
                                                    {/* <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div> */}
                                                    <Col sm={4}>
                                                        <img src={item.img} alt="..." className="img-fluid" />
                                                    </Col>
                                                    <Col sm={8}>
                                                        <h4 className="nomargin">{item.name}</h4>
                                                        {/* <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p> */}
                                                    </Col>
                                                    {/* <div class="col-sm-10">
										<h4 class="nomargin">Product 1</h4>
										<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
									</div> */}
                                                </Row>
                                            </td>
                                            <td data-th="Price">${item.price}</td>
                                            <td data-th="Quantity">
                                                {/* <input type="number" className="form-control text-center" value="1" /> */}
                                                <p>{item.qty}</p>
                                            </td>
                                            <td data-th="Subtotal" className="text-center">${item.subTotal}</td>
                                            <td>
                                                {/* <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button> */}
                                                <button className="btn btn-danger btn-sm" onClick={() => { handleDeleteCartItem(item.id) }}><i className="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            {/* <tr className="visible-xs">
                        <td className="text-center"><strong>Total 1.99</strong></td>
                    </tr> */}
                            <tr>
                                <td><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</button></td>
                                <td colSpan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center"><strong>Total ${totalPrice}</strong></td>
                                <td><button className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></button></td>
                            </tr>
                        </tfoot>
                    </Table>

                ) : (
                        <div style={{color: "red" ,textAlign: "center", marginTop:"25%"}}>
                            <h1>Cart is empty</h1>
                        </div>
                    )
                }
            </Container>

        </>
    )
}
