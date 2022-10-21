import { useState } from 'react';
import { RiFilter3Line } from 'react-icons/ri';
import { styleOptions, sexOptions, priceOptions } from '../../../assets/data/filterOptions';

import styles from './filter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FilterOptions = ({ options, inputType, ChosenValue, handleChange }) => {
    return (
        <div className={cx('filter__term')}>
            <div className={cx('filter__term__title')}>{options.title}</div>
            <div className={cx('filter__term__options')}>
                {options.options.map((option, index) => {
                    return (
                        <div key={index}>
                            <input
                                type={inputType}
                                id={`${options.type}-${index}`}
                                checked={
                                    inputType === 'radio' && ChosenValue === option
                                        ? true
                                        : inputType === 'checkbox' && ChosenValue.includes(option)
                                        ? true
                                        : false
                                }
                                name={`${options.type}-group`}
                                onChange={(e) => handleChange(e.target.checked, option)}
                            />
                            <label htmlFor={`${options.type}-${index}`}>{option}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Filter = (props) => {
    const [showFilter, setShowFilter] = useState(false);
    const { style, setStyle, sex, setSex, priceOrder, setPriceOrder } = props;

    // Handle function
    const handleStyleChange = (checked, styleName) => {
        if (checked) setStyle([...style, styleName]);
        else setStyle(style.filter((styleItem) => styleItem !== styleName));
    };

    const handleSexChange = (checked, sexName) => {
        if (checked) setSex(sexName);
    };

    const handlePriceChange = (checked, priceOrder) => {
        if (checked) setPriceOrder(priceOrder);
    };

    return (
        <>
            <div className={cx('filter-wrapper')}>
                <div
                    className={cx('header')}
                    onClick={() => setShowFilter(!showFilter)}
                >
                    <p>bộ lọc</p>
                    <button>
                        <RiFilter3Line />
                    </button>
                </div>

                <div
                    className={cx('overlay', [`${showFilter ? 'active' : ''}`])}
                    onClick={() => setShowFilter(false)}
                ></div>

                <div className={cx('filter', [`${showFilter ? '' : 'hidden'}`])}>
                    <FilterOptions
                        options={styleOptions}
                        inputType={'checkbox'}
                        ChosenValue={style}
                        handleChange={handleStyleChange}
                    />

                    <FilterOptions
                        options={sexOptions}
                        inputType={'radio'}
                        ChosenValue={sex}
                        handleChange={handleSexChange}
                    />

                    <FilterOptions
                        options={priceOptions}
                        inputType={'radio'}
                        ChosenValue={priceOrder}
                        handleChange={handlePriceChange}
                    />
                </div>
            </div>
        </>
    );
};

export default Filter;
