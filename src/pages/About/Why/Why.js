import React from 'react';
import styles from './why.module.scss';
import classNames from 'classnames/bind';
import why from '../../../assets/images/why.png';

const cx = classNames.bind(styles);

const Why = () => {
    return (
        <div className={cx('why')}>
            <div className={cx('why-container')}>
                <img
                    src={why}
                    alt="why-section-img"
                />
                <div className={cx('content')}>
                    <p className={cx('content__subheading')}>tại sao không ?</p>
                    <p className={cx('content__description', 'light')}>đó là câu hỏi của chúng tôi khi bắt đầu</p>
                    <h3 className={cx('content__heading')}>
                        và cũng là tinh thần "Why not" chúng tôi khát khao truyền tải
                    </h3>
                    <p className={cx('content__description')}>
                        với những sản phẩm được thiết kế bằng nhiệt huyết, khát khao và khối óc đầy sáng tạo của đội ngũ
                        chính những người trẻ Việt Nam, chúng tôi tin rằng tinh thần "Why not" ấy sẽ luôn đồng hành và
                        truyền cảm hứng cho bạn mỗi ngày.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Why;
