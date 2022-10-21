import React from 'react';
import { useFormik } from 'formik';
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine } from 'react-icons/ri';
import * as Yup from 'yup';
import cod from '../../../assets/images/cod.png';
import fundiin from '../../../assets/images/fundiin.png';
import momo from '../../../assets/images/momo.png';
import vnpay from '../../../assets/images/vnpay.png';
import './footer2.scss';

const sex = ['Nam', 'Nữ'];

const Footer2 = () => {
    const formik = useFormik({
        initialValues: {
            sex: '',
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            sex: Yup.string().required('Chọn giới tính').oneOf(sex),
            name: Yup.string().required('Nhập tên của bạn'),
            email: Yup.string().email('Email không hợp lệ').required('Nhập email của bạn'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <footer>
            <div className="footer-wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <h4>Nhận thông tin mới nhất từ Curnon</h4>

                    <div className="form-wrapper">
                        <div className="input-wrapper">
                            <select
                                name="sex"
                                id="sex"
                                form="sexform"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            >
                                <option value="">Giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                            {formik.touched.sex && formik.errors.sex && (
                                <div className="error-message">{`* ${formik.errors.sex}`}</div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Họ tên..."
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="error-message">{`* ${formik.errors.name}`}</div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email..."
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="error-message">{`* ${formik.errors.email}`}</div>
                            )}
                        </div>
                        <button type="submit">ĐĂNG KÝ NGAY</button>
                    </div>
                </form>

                <div className="contact">
                    <h4 className="header">LIÊN LẠC</h4>
                    <p>cskh@gmail.com</p>
                    <p>123456789</p>
                    <div className="social-media">
                        <button>
                            <RiFacebookBoxLine />
                        </button>
                        <button>
                            <RiInstagramLine />
                        </button>
                        <button>
                            <RiYoutubeLine />
                        </button>
                    </div>

                    <div className="icon-pay">
                        <img
                            src={cod}
                            alt="cod"
                        />
                        <img
                            src={fundiin}
                            alt="fundiin"
                        />
                        <img
                            src={momo}
                            alt="momo"
                        />
                        <img
                            src={vnpay}
                            alt="vnpay"
                        />
                    </div>
                </div>

                <div className="address">
                    <div className="address__item">
                        <h4>HÀ NỘI STORES</h4>
                        <p>33 Hàm Long, Hoàn Kiếm.</p>
                        <p>9 B7 Phạm Ngọc Thạch, Đống Đa.</p>
                        <p>173C Kim Mã, Ba Đình.</p>
                    </div>
                    <div className="address__item">
                        <h4>TP.HCM STORES</h4>
                        <p>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</p>
                        <p>348 Lê Văn Sỹ, Phường 14, Quận 3.</p>
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; 2022 - CURNON SHOP</p>
        </footer>
    );
};

export default Footer2;
