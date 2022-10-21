import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../../../components';

import bannerDestop from '../../../assets/images/banner-destop.jpg';
import bannerTablet from '../../../assets/images/banner-mobile.jpeg';

import classNames from 'classnames/bind';
import styles from './bannerHome.module.scss';

const cx = classNames.bind(styles);

const banner = {
    heading: 'futura collection',
    subheading: 'push your limit',
    description: 'Dòng đồng hồ Chronograph đầu tiên của Curnon, sở hữu tính năng bấm giờ và thiết kế mạnh mẽ.',
};

const BannerHome = () => {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner-img-wrapper')}>
                <Banner
                    bannerDestop={bannerDestop}
                    bannerTablet={bannerTablet}
                    destopHeight={50}
                    tabletHeight={70}
                />
            </div>
            <div className={cx('banner-content-wrapper')}>
                <div className={cx('banner-content')}>
                    <h2 className={cx('banner-content__heading')}>{banner.heading}</h2>
                    <p className={cx('banner-content__subheading')}>{banner.subheading}</p>
                    <p className={cx('banner-content__description')}>
                        {banner.description.split(',')[0]}
                        <br className={cx('breaker')} />
                        {banner.description.split(',')[1]}
                    </p>
                    <Link to="/products">
                        <button className={cx('banner-content__button')}>shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
