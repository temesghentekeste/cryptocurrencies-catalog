import styles from './App.module.css';
import CryptoCurrencies from '../../containers/CryptoCurrencies/CryptoCurrencies';

function App() {
  return (
    <div className={styles.app}>
      <CryptoCurrencies />
    </div>
  );
}

export default App;
