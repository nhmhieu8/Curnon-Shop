import React from 'react';
import styles from './definition.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Definition = () => {
    return (
        <div className={cx('definition')}>
            <div className={cx('definition-container')}>
                <h3 className={cx('title')}>chào bạn, chúng tôi là CURNON!</h3>
                <h3 className={cx('subtitle')}>/ cơ - nần /!</h3>
                <p className={cx('description')}>
                    Chúng tôi biến sản phẩm phụ kiện không thể thiếu trở thành những biểu tượng tinh thần đầy cảm hứng,
                    để thúc đẩy thế hệ trẻ Việt Nam không ngừng tiến lên phía trước.
                </p>
            </div>
        </div>
    );
};

export default Definition;
