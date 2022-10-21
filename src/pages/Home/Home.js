import BannerHome from './BannerHome/BannerHome';
import Policies from './Policies/Policies';
import ProductSample from './ProductSample/ProductSample';
import Story from './Story/Story';
import './home.scss';

const Home = () => {
    return (
        <main className="home-page">
            <BannerHome />
            <Policies />
            <ProductSample />
            <Story />
        </main>
    );
};

export default Home;
