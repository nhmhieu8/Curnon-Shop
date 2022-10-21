import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import logo from '../../../assets/images/curnon-logo.svg';
import { RiShoppingBagLine, RiAccountCircleLine, RiAlignJustify, RiCloseLine } from 'react-icons/ri';
import { selectCartItems, selectIsShowCart, showCart, hideCart } from '../../../redux/cart/cartSlice';

let cx = classNames.bind(styles);

const navData = [
    { path: '/', display: 'trang chủ' },
    { path: '/products', display: 'sản phẩm' },
    { path: '/about', display: 'về curnon' },
];

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isShowCart = useSelector(selectIsShowCart);

    const openCart = () => dispatch(showCart());
    const closeCart = () => dispatch(hideCart());

    return (
        <>
            <Cart
                isShowCart={isShowCart}
                closeCart={closeCart}
            />
            <header className={cx('header')}>
                <div className={cx('header-container')}>
                    <div
                        className={cx('nav-container')}
                        onClick={closeCart}
                    >
                        <button
                            className={cx('toggle-btn')}
                            onClick={() => setShowNav(!showNav)}
                        >
                            {showNav ? <RiCloseLine /> : <RiAlignJustify />}
                        </button>
                        <div className={cx('nav', [showNav ? '' : 'hidden'])}>
                            {navData.map((navItem, index) => (
                                <Link
                                    to={navItem.path}
                                    key={index}
                                    className={cx('nav__item')}
                                    onClick={() => setShowNav(false)}
                                >
                                    <p>{navItem.display}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link
                        to="/"
                        className={cx('logo')}
                        onClick={closeCart}
                    >
                        <img
                            src={logo}
                            alt="logo-img"
                            className={cx('logo__img')}
                        />
                    </Link>
                    <div className={cx('cart-container')}>
                        <button
                            className={cx('cart')}
                            onClick={openCart}
                        >
                            <RiShoppingBagLine />
                            <span className={cx('cart__quantity')}>{cartItems.length}</span>
                        </button>
                        <button className={cx('user')}>
                            <RiAccountCircleLine />
                        </button>
                    </div>
                </div>
            </header>
            <div className={cx('empty')}></div>
        </>
    );
};

export default Header;
