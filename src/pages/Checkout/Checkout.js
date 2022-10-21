import Customer from './Customer/Customer';
import Order from './Order/Order';
import styles from './checkout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Checkout = () => {
    return (
        <main className={cx('checkout')}>
            <Customer />
            <Order />
        </main>
    );
};

export default Checkout;
