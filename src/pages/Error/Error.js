import styles from './error.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Error = () => {
    return (
        <div className={cx('error')}>
            <h2 className={cx('content')}>page not found</h2>
        </div>
    );
};

export default Error;
