import { Link } from 'react-router-dom';
import { deleteItem, increaseQuantity, decreaseQuantity, selectCartItems } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
import { RiCloseLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import numberWithDots from '../../utils/numberWithDots';

const cx = classNames.bind(styles);

const Cart = ({ isShowCart, closeCart }) => {
    const dispatch = useDispatch();
    const products = useSelector(selectCartItems);
    const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
            <div
                className={cx('overlay', [`${isShowCart ? 'active' : ''}`])}
                onClick={closeCart}
            ></div>
            <div className={cx('cart', [`${isShowCart ? 'active' : ''}`])}>
                <div className={cx('cart__header')}>
                    <p>giỏ hàng của bạn</p>
                    <button onClick={closeCart}>
                        <RiCloseLine />
                    </button>
                </div>
                <div className={cx('cart__content')}>
                    {products.length === 0 && (
                        <div className={cx('cart__content__empty')}>
                            <p>Hiện đang chưa có sản phẩm nào trong giỏ hàng của bạn.</p>
                            <Link
                                to="/products"
                                onClick={closeCart}
                            >
                                <button className={cx('btn')}>mua hàng ngay →</button>
                            </Link>
                        </div>
                    )}

                    {products.length !== 0 && (
                        <div className={cx('cart__content__wrapper')}>
                            <div className={cx('cart__content__products')}>
                                {products.map((product) => (
                                    <div
                                        className={cx('cart__content__products__product')}
                                        key={product.id}
                                    >
                                        <button onClick={() => dispatch(deleteItem(product))}>
                                            <RiCloseLine />
                                        </button>

                                        <img
                                            src={product.images[0]}
                                            alt="img"
                                        />

                                        <div className={cx('product-info')}>
                                            <p className={cx('product-name')}>{product.name}</p>
                                            <div className={cx('quantity')}>
                                                <button onClick={() => dispatch(decreaseQuantity(product))}>
                                                    <RiSubtractLine />
                                                </button>
                                                <p>{`${product.quantity}`}</p>
                                                <button onClick={() => dispatch(increaseQuantity(product))}>
                                                    <RiAddLine />
                                                </button>
                                            </div>
                                        </div>

                                        <p className={cx('product-price')}>{numberWithDots(product.price)}₫</p>
                                    </div>
                                ))}
                            </div>

                            <div className={cx('cart__content__checkout')}>
                                <p>
                                    Thành tiền:<span>{numberWithDots(totalPrice)}₫</span>
                                </p>
                                <Link
                                    to="/checkout"
                                    onClick={closeCart}
                                >
                                    <button className={cx('btn')}>Thanh toán ngay →</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
