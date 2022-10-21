import React from 'react';

import illus1 from '../../../assets/images/Illus-01.png';
import illus2 from '../../../assets/images/Illus-02.png';
import illus3 from '../../../assets/images/Illus-03.png';
import styles from './coreValues.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const coreValueList = [
    {
        img: illus1,
        title: 'dám nghĩ dám làm',
        description:
            'Với khát khao trở thành người đồng hành của các bạn, chúng tôi tin rằng chính mình phải có đủ can đảm để vượt qua thách thức, dám nghĩ, dám dẫn đầu và khác biệt.',
    },
    {
        img: illus2,
        title: 'bắt đầu và kết thúc bằng khách hàng',
        description:
            'Với tinh thần của những chiến binh, chúng tôi luôn chiến đấu với chính bản thân mình mỗi ngày để đem lại những trải nghiệm “WOW” nhất cho người trẻ Việt Nam.',
    },
    {
        img: illus3,
        title: 'truyền cảm hứng',
        description:
            'Tương lai với chúng tôi là những sản phẩm vươn tầm thế giới, là thế hệ trẻ Việt Nam đầy tự tin để theo đuổi đam mê của mình, là "Why not?" trở thành triết lí của tất cả mọi người.',
    },
];

const CoreValueItem = ({ img, title, description }) => {
    return (
        <div className={cx('coreValueItem')}>
            <img
                src={img}
                alt={title}
            />
            <p className={cx('title')}>{title}</p>
            <p className={cx('description')}>{description}</p>
        </div>
    );
};

const CoreValues = () => {
    return (
        <div className={cx('coreValues')}>
            <div className={cx('coreValues-container')}>
                {coreValueList.map((coreValueItem, index) => (
                    <CoreValueItem
                        {...coreValueItem}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoreValues;
