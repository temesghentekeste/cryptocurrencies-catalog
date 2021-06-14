/* eslint-disable comma-dangle */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CryptoQuote from '../../containers/CryptoQuote/CryptoQuote';
import Trending from '../../containers/Trending/Trending';
import App from '../../containers/App/App';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/cryptoquote/:id" component={CryptoQuote} />
      <Route path="/trending" component={Trending} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
