import React from 'react';
import { Link } from 'react-router-dom';
import confirmedOrder from '../../assets/images/order_confirmed_green.svg';
import './delivery.scss';

const Delivery = () => {
    return (
        <div className="delivery">
            <img
                src={confirmedOrder}
                alt="confirmed-order-img"
            />

            <h4>Đặt hàng thành công</h4>

            <Link to="/">
                <button>Về trang chủ</button>
            </Link>
        </div>
    );
};

export default Delivery;
