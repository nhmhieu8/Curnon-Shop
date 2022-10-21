import React from 'react';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import styles from './productCard.module.scss';
import classNames from 'classnames/bind';
import numberWithDots from '../../utils/numberWithDots';

const cx = classNames.bind(styles);

const ProductCard = ({ data }) => {
    const { id, name, style, price, images } = data;
    const dispatch = useDispatch();

    return (
        <div className={cx('product-container')}>
            <Link to={`/products/${id}`}>
                <img
                    src={images[0]}
                    alt={name}
                    className={cx('product-img')}
                />

                <div className={cx('product-detail')}>
                    <p className={cx('product-detail__style')}>{style}</p>
                    <p className={cx('product-detail__name')}>{name}</p>
                    <p className={cx('product-detail__price')}>{numberWithDots(price)} ₫</p>
                </div>
            </Link>
            <button
                className={cx('add-to-cart')}
                onClick={() => dispatch(addItem(data))}
            >
                <h5>thêm vào giỏ</h5>
            </button>
        </div>
    );
};

export default ProductCard;
