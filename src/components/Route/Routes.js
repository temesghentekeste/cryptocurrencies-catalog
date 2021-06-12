import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import CryptoQuote from '../../containers/CryptoQuote/CryptoQuote';
import Trending from '../../containers/Trending/Trending';
import Footer from '../Footer/Footer';

const Routes = () => {
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/cryptoquote/:id">
        <CryptoQuote />
      </Route>

      <Route path="/trending">
        <Trending />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </Router>;
};

export default Routes;
