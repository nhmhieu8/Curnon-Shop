import React from 'react';

import mission from '../../../assets/images/mission.jpg';
import avatar from '../../../assets/images/avatar.png';

import styles from './mission.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Mission = () => {
    return (
        <div className={cx('mission')}>
            <div className={cx('mission-container')}>
                <div className={cx('content')}>
                    <h3 className={cx('heading')}>giá trị cốt lõi</h3>
                    <p className={cx('description')}>
                        "Chúng tôi tin rằng cách tốt nhất để truyền tải được thông điệp “Tại sao không?” trước hết phải
                        bắt đầu từ chính tập thể của Curnon.”
                    </p>
                    <div className={cx('founder')}>
                        <img
                            src={avatar}
                            alt="founder-avatar"
                        />
                        <div className={cx('founder-info')}>
                            <p>Quang Thái</p>
                            <p>CEO | FOUNDER</p>
                        </div>
                    </div>
                </div>
                <img
                    src={mission}
                    alt="mission-img"
                />
            </div>
        </div>
    );
};

export default Mission;
