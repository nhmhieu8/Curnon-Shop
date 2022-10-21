import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { ProductCard } from '../../../components';

import styles from './productSample.module.scss';
import classNames from 'classnames/bind';

import data from '../../../assets/data/products';

const cx = classNames.bind(styles);
const sampleProductData = data.slice(0, 4);

const ProductSample = () => {
    return (
        <div className={cx('product-section')}>
            <div className={cx('product')}>
                <h3 className={cx('product__heading')}>our's product</h3>

                <Link to="/products">
                    <button className={cx('product__subheading')}>
                        <h5>xem tất cả</h5>
                        <RiArrowRightLine />
                    </button>
                </Link>

                <ul className={cx('product__cards')}>
                    {sampleProductData.map((productData, index) => (
                        <ProductCard
                            data={productData}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductSample;
