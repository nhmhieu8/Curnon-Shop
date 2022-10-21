import { useState, useEffect } from 'react';
import { Banner } from '../../components';
import Filter from './Filter/Filter';
import ProductsList from './ProductsList/ProductsList';

import styles from './products.module.scss';
import classNames from 'classnames/bind';

import data from '../../assets/data/products';
import bannerDestop from '../../assets/images/collection_nam-destop.webp';

const cx = classNames.bind(styles);

const Products = () => {
    const [products, setProducts] = useState(data);
    const [style, setStyle] = useState([]);
    const [sex, setSex] = useState('nam');
    const [priceOrder, setPriceOrder] = useState('mặc định');

    useEffect(() => {
        let newProducts = [...data];

        //style sort
        if (style.length !== 0) {
            newProducts = newProducts.filter((product) => style.includes(product.style));
        }

        //sex sort
        newProducts = newProducts.filter((product) => sex.includes(product.sex));

        //price sort
        newProducts = newProducts.sort((a, b) =>
            priceOrder === 'giá tăng dần' ? a.price - b.price : b.price - a.price
        );

        setProducts(newProducts);
    }, [style, sex, priceOrder]);

    return (
        <div className={cx('products')}>
            <div className={cx('products__banner')}>
                <Banner
                    bannerDestop={bannerDestop}
                    bannerTablet={bannerDestop}
                    destopHeight={40}
                    tabletHeight={30}
                />
            </div>
            <div className={cx('products__wrapper')}>
                <Filter
                    style={style}
                    setStyle={setStyle}
                    sex={sex}
                    setSex={setSex}
                    priceOrder={priceOrder}
                    setPriceOrder={setPriceOrder}
                />
                <ProductsList products={products} />
            </div>
        </div>
    );
};

export default Products;
