import React from 'react';
import { ProductCard } from '../../../components';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './productsList.module.scss';

const cx = classNames.bind(styles);

const ProductsList = ({ products }) => {
    if (products.length === 0) return <h3 className={cx('productsList', 'not-found')}>Not found product</h3>;
    return (
        <div className={cx('productsList')}>
            {products.map((product, index) => {
                return (
                    <ProductCard
                        data={product}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductsList;
