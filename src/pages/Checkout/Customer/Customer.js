import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetItem } from '../../../redux/cart/cartSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './customer.scss';

const Customer = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phoneNumber: '',
            address: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email Không hợp lệ').required('Không được bỏ trống email'),
            name: Yup.string().required('Không được bỏ trống tên'),
            phoneNumber: Yup.string()
                .required('Không được bỏ trống số điện thoại')
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'SĐT Không hợp lệ'),
            address: Yup.string().required('Không được bỏ trống địa chỉ'),
        }),

        onSubmit: (values) => {
            dispatch(resetItem());
            console.log(values);
            navigate('/delivery');
        },
    });

    return (
        <div className="customer">
            <h4>thông tin khách hàng</h4>

            <form onSubmit={formik.handleSubmit}>
                <div className="input-wrapper">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{`* ${formik.errors.email}`}</div>
                    )}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Họ tên"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="error-message">{`* ${formik.errors.name}`}</div>
                    )}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Số điện thoại"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                        <div className="error-message">{`* ${formik.errors.phoneNumber}`}</div>
                    )}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Địa chỉ nhận hàng"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <div className="error-message">{`* ${formik.errors.address}`}</div>
                    )}
                </div>

                <div className="input-wrapper">
                    <textarea
                        placeholder="Nhập ghi chú nếu cần"
                        maxLength="400"
                        rows="6"
                    />
                </div>

                <p className="form-note">
                    *Phương thức vận chuyển là <span>FREESHIP</span> với đơn hàng từ 700.000đ
                </p>

                <button type="submit">ĐẶT HÀNG</button>
            </form>
        </div>
    );
};

export default Customer;
