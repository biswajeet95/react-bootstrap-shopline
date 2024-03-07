import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItem, setCartItem, cartCount, setCartCount }) => {

    const navigate = useNavigate();



    function inc(product) {
        const exsit = cartItem.find((x) => {
            return x.id === product.id;
        })
        setCartItem(cartItem.map((item) => {
            return item.id === product.id ? { ...exsit, quantity: exsit.quantity + 1 } : item
        }))

        setCartCount(cartCount + 1);
    }


    function dec(product) {
        const exsit = cartItem.find((x) => x.id === product.id);
        if (exsit.quantity > 0) {
            setCartItem(cartItem.map((item) =>
                item.id === product.id ? { ...exsit, quantity: exsit.quantity - 1 } : item
            ));
            setCartCount(cartCount - 1);
        }
    }


    function removeCart(product) {
        const exsit = cartItem.find((x) => {
            return x.id === product.id;
        })
        if (exsit.quantity > 0) {
            setCartItem(cartItem.filter((x) => {
                return x.id !== product.id
            }))

            setCartCount(cartCount - exsit.quantity);
        }

    }


    const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <>
            {cartItem.length === 0 &&

                <div className='m-5 min-vw-100 text-align-center'>
                    <p >Cart Is Empty Please Sale</p>
                    <Link to="/" className='cart_shop btn btn-primary text-dark fw-bold'> Shopping   </Link>
                </div>







            }
            <div className="container-fluid mt-3">
                {cartItem.map((item) => {
                    return (
                        <div key={item.id} className="card mb-3 " style={{ border: "1px solid #b6ebfc" }}>
                            <div className='col d-flex align-items-center justify-content-between'>
                                <img src={item.thumbnail} className="card-img-top" style={{ width: "8em", height: "8em", borderRadius: "5px" }} alt={item.thumbnail} />

                                <div className='d-flex flex-column justify-content-around ml-3'>
                                    <h3>{item.title}</h3>
                                    <p className='text-dark fw-bold'>₹ <span className='text-primary fw-bold'>{item.price}</span> </p>
                                    <div className="d-flex align-items-center">

                                        <button className='quantity_dec btn btn-primary text-dark fw-bold' onClick={() => dec(item)}>-</button>
                                        <input type="text" style={{ width: "25px" }} defaultValue={item.quantity} />
                                        <button className='quantity_inc btn btn-primary text-dark fw-bold' onClick={() => inc(item)}>+</button>
                                    </div>
                                </div>

                                <div>
                                    <h6 className='text-dark fw-bold'>TOTAL PRICE: ₹ <span className='text-primary fw-bold'>{item.price * item.quantity}</span></h6>
                                </div>
                                <button className='btn btn-primary text-dark fw-bold remove_cart' onClick={() => removeCart(item)}>X</button>
                            </div>
                        </div>
                    )
                })}
                {cartItem.length > 0 &&
                    <>
                        <p className='text-dark fw-bold'>TOTAL: ₹ <span className='text-primary fw-bold'>{TotalPrice}</span></p>
                        <button className='btn btn-primary text-dark fw-bold'>CheckOut</button>
                    </>
                }
            </div>


        </>
    )
}

export default Cart;



