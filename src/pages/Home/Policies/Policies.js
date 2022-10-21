import React, { useState, useEffect, useRef } from 'react';
import { RiTruckLine, RiShieldCheckLine, RiArchiveLine } from 'react-icons/ri';

import classNames from 'classnames/bind';
import styles from './policies.module.scss';

const cx = classNames.bind(styles);

const policies = [
    { content: 'freeship đơn hàng > 700k', icon: <RiTruckLine /> },
    { content: 'bảo hành 10 năm', icon: <RiShieldCheckLine /> },
    { content: 'đổi trả miễn phí trong vòng 7 ngày', icon: <RiArchiveLine /> },
];

const Policies = () => {
    const policiesRef = useRef(null);
    const [slideId, setSlideId] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 868) {
            if (slideId === 0) setSlideId(1);
            else {
                const timeoutId = setTimeout(() => {
                    if (slideId === policies.length) setSlideId(1);
                    else setSlideId(slideId + 1);
                }, 3000);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [slideId]);

    return (
        <section className={cx('policies-section')}>
            <div className={cx('policies-container')}>
                <ul
                    className={cx('policies')}
                    ref={policiesRef}
                >
                    {policies.map((policy, index) => (
                        <li
                            className={cx('policies__item', [
                                `${slideId === index + 1 || slideId === 0 ? '' : 'hidden'}`,
                            ])}
                            key={index}
                            data-id={index + 1}
                        >
                            <div className={cx('icon')}>{policy.icon}</div>
                            <p className={cx('content')}>{policy.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Policies;
