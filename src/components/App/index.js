/* eslint-disable import/no-useless-path-segments */
import styles from './App.module.css';
import CryptoCurrencies from '../../containers/CryptoCurrencies/';
import Header from '../Header/';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <CryptoCurrencies />
    </div>
  );
}

export default App;
