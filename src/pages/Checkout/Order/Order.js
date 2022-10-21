import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cartSlice';
import numberWithDots from '../../../utils/numberWithDots';
import './order.scss';
import logo from '../../../assets/images/curnon-logo.svg';

const Order = () => {
    const cartItems = useSelector(selectCartItems);

    const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);

    return (
        <div className="order">
            <div className="order__container">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo-curnon"
                    />
                </Link>
                <h4 className="order__header">ĐƠN HÀNG</h4>
                <div className="order__list">
                    {cartItems.map((cartItem, index) => {
                        const { images, name, quantity, price } = cartItem;

                        return (
                            <div
                                className="order__list__item"
                                key={index}
                            >
                                <img
                                    src={images[0]}
                                    alt={`img-${name}`}
                                />
                                <div>
                                    <p>{name}</p>
                                    <p>Qty: {quantity}</p>
                                </div>
                                <p>{numberWithDots(price)} ₫</p>
                            </div>
                        );
                    })}
                </div>

                <div className="order__calculation">
                    <div>
                        <p>Thành tiền:</p>
                        <h5>
                            <strong>{numberWithDots(totalPrice)} ₫</strong>
                        </h5>
                    </div>
                    <div>
                        <p>Phí ship:</p>
                        <p>
                            <strong>0 ₫</strong>
                        </p>
                    </div>
                </div>

                <div className="order__summary">
                    <p>TỔNG:</p>
                    <p>
                        <strong>{numberWithDots(totalPrice)} ₫</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Order;
