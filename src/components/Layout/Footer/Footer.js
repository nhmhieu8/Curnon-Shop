import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';

import classNames from 'classnames/bind';
import styles from './footer.module.scss';

import storesAddress from '../../../assets/data/storesAddress';

const cx = classNames.bind(styles);

const socialMedia = [<RiFacebookFill />, <RiInstagramFill />, <RiYoutubeFill />];

const contact = {
    title: 'liên lạc',
    detailList: ['cskh@curnonwatch.com', '123456789'],
};

const openingHour = {
    title: 'giờ mở cửa',
    detailList: ['T2-T7: 08:00 - 20:00', 'CN: 08:00 - 17:00'],
};

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-container')}>
                {storesAddress.map((address, index) => {
                    const { region, showRoom } = address;
                    return (
                        <div
                            className={cx('footer-item', 'store')}
                            key={index}
                        >
                            <p className={cx('title')}>{region} stores</p>
                            <ul className={cx('list')}>
                                {showRoom.map((address, index) => (
                                    <li
                                        className={cx('detail')}
                                        key={index}
                                    >
                                        {address}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}

                <div className={cx('footer-item', 'opening-hour')}>
                    <h4 className={cx('title')}>{openingHour.title}</h4>
                    <ul className={cx('list')}>
                        {openingHour.detailList.map((item, index) => (
                            <li
                                className={cx('detail')}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={cx('footer-item', 'contact')}>
                    <h4 className={cx('title')}>{contact.title}</h4>
                    <ul className={cx('list')}>
                        {contact.detailList.map((item, index) => (
                            <li
                                className={cx('detail')}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                        <li className={cx('detail', 'social-media')}>
                            {socialMedia.map((logo, index) => {
                                return (
                                    <button
                                        className={cx('social-media__btn')}
                                        key={index}
                                    >
                                        {logo}
                                    </button>
                                );
                            })}
                        </li>
                    </ul>
                </div>
            </div>

            <p className={cx('author')}>&copy; CURNON SHOP</p>
        </footer>
    );
};

export default Footer;
