/* eslint-disable import/no-useless-path-segments */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import CryptoCurrencies from '../../containers/CryptoCurrencies/';
import Header from '../Header/';
import NotFound from '../NotFound/';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <CryptoCurrencies />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
