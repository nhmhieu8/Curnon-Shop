import { Banner } from '../../components';
import bannerDestop from '../../assets/images/banner-about-destop.jpg';
import CoreValues from './CoreValues/CoreValues';
import Definition from './Definition/Definition';
import Mission from './Mission/Mission';
import Why from './Why/Why';

const About = () => {
    return (
        <main className="about">
            <div className="about-container">
                <Banner
                    bannerDestop={bannerDestop}
                    bannerTablet={bannerDestop}
                    destopHeight={60}
                    tabletHeight={60}
                />
                <Definition />
                <Mission />
                <CoreValues />
                <Why />
            </div>
        </main>
    );
};

export default About;
