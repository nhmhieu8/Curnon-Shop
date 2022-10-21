import React from 'react';

import classNames from 'classnames/bind';
import styles from './story.module.scss';

import logoSmall from '../../../assets/images/logo_small.svg';
import storyLarge from '../../../assets/images/storyLarge.png';

const cx = classNames.bind(styles);

const story = {
    title: 'the story of curnon',
    decription: `Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon, 
    nhưng ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn, 
    không chỉ dừng lại là một thương hiệu đồng hồ. 
    Chúng tôi muốn mang tới một nguồn cảm hứng, một sự thay đổi về tư duy, 
    về suy nghĩ và chính những cái chúng tôi gọi là trải nghiệm cho người trẻ.`,
};

const Story = () => {
    return (
        <section className={cx('story')}>
            <div className={cx('story-container')}>
                <img
                    src={logoSmall}
                    alt="logo-small"
                    className={cx('story__logo-small')}
                />

                <h4 className={cx('story__heading')}>{story.title}</h4>

                <p className={cx('story__description')}>{story.decription}</p>

                <img
                    src={storyLarge}
                    alt="storyLarge-img"
                    className={cx('story__large-img')}
                />
            </div>
        </section>
    );
};

export default Story;
