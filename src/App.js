import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ScrollToTop } from './components';
import Routes from './routes/Routes';
import store from './redux/store';
import './assets/style/_base.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <ScrollToTop>
                    <Routes />
                </ScrollToTop>
            </Router>
        </Provider>
    );
};

export default App;
