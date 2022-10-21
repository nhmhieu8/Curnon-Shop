import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components';
import { Home, Products, Checkout, Error, About, Detail, Delivery } from '../pages';

const PageRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="products"
                    element={<Products />}
                />
                <Route
                    path="products/:productId"
                    element={<Detail />}
                />
                <Route
                    path="about"
                    element={<About />}
                />
            </Route>

            <Route
                path="/checkout"
                element={<Checkout />}
            />

            <Route
                path="/delivery"
                element={<Delivery />}
            />

            <Route
                path="*"
                element={<Error />}
            />
        </Routes>
    );
};

export default PageRoutes;
