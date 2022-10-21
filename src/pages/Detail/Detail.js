import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import numberWithDots from '../../utils/numberWithDots';

// Import styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './detail.scss';

//import data
import data from '../../assets/data/products';
import { useState } from 'react';

const Detail = () => {
    const { productId } = useParams();

    const dispatch = useDispatch();

    const [indexImg, setIndexImg] = useState(0);

    const [product] = data.filter((product) => product.id === Number(productId));
    const { images, style, name, price, available } = product;

    return (
        <main className="detail">
            <div className="detail-container">
                <div className="thumbBox">
                    {images.map((image, index) => (
                        <div
                            className={`thumbBox__img-container ${index === indexImg ? 'active' : ''}`}
                            key={index}
                            onClick={() => setIndexImg(index)}
                        >
                            <img
                                src={image}
                                alt="img"
                            />
                        </div>
                    ))}
                </div>

                <div className="img-container">
                    <img
                        src={images[indexImg]}
                        alt="img"
                    />
                </div>

                <div className="slider">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt="img"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="contentBox">
                    <p className="style">{style}</p>
                    <h3 className="name">{name}</h3>
                    <h4 className="price">{numberWithDots(price)}₫</h4>
                    <p className="status">
                        Tình trạng:{' '}
                        <span className={available ? 'available' : 'empty'}>{available ? 'còn hàng' : 'hết hàng'}</span>
                    </p>

                    <Link to="/checkout">
                        <button className="checkout-button">Thanh toán ngay</button>
                    </Link>
                    <button
                        className="addToCart-button"
                        onClick={() => dispatch(addItem(product))}
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Detail;
