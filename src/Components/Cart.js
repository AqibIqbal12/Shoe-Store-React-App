import React, { useContext } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import LogoAndNavigation from './Home/LogoAndNavigation';
import { CartContext } from '../context/CartContext'
// import Style from './Cart.module.css'
export const Cart = () => {

    const { cart, decreaseQty, increaseQty, deleteCartItem } = useContext(CartContext);
    const prices = cart.map((product) => product.price * product.qty);
    let totalPrice = 0
    if (prices.length) totalPrice = prices.reduce((total, p) => total + p);

    return (
        <>
            <LogoAndNavigation inActive="inActive" />
            <Container>
                {cart.length > 0 ? (
                    <Table id="cart" className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '38%' }}>Product</th>
                                <th style={{ width: '10%' }} className="text-center">Price</th>
                                <th style={{ width: '10%' }} className="text-center">Quantity</th>
                                <th style={{ width: '10%' }} className="text-center">Itemleft</th>
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
                                                    </Col>
                                                    {/* <div class="col-sm-10"></div> */}
                                                </Row>
                                            </td>
                                            <td data-th="Price" className="text-center">${item.price}</td>
                                            {item.itemLeft === 0 ? <td data-th="Quantity" className="text-center">
                                                <button  onClick={() => decreaseQty(item.id)}> - </button>
                                                <p className="d-inline pl-1 pr-1">{item.qty}</p>
                                                <button disabled={true} onClick={() => increaseQty(item.id)}> + </button>
                                            </td> :
                                            <td data-th="Quantity" className="text-center">
                                                <button onClick={() => decreaseQty(item.id)}> - </button>
                                                <p className="d-inline pl-1 pr-1">{item.qty}</p>
                                                <button onClick={() => increaseQty(item.id)}> + </button>
                                            </td>
                                            }
                                            <td data-th="ItemLeft" className="text-center">
                                               <p>{item.itemLeft}</p> 
                                            </td>
                                            <td data-th="Subtotal" className="text-center">${item.subTotal}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => deleteCartItem(item.id)}><i className="fa fa-trash-o"></i></button>
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
                        <div style={{ color: "red", textAlign: "center", marginTop: "25%" }}>
                            <h1>Cart is empty</h1>
                        </div>
                    )
                }
            </Container>

        </>
    )
}
