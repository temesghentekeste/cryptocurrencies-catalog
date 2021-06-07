import React from 'react';

const CryptoCurrency = ({
  symbol,
  name,
  currency,
  stockExchange,
  exchangeShortName,
}) => (
  <div className="cryptoCurrency">
    <header>
      <p>{name}</p>
      <p className="cryptoCurrency__symbol">{symbol}</p>
    </header>

    <footer>
      <span>{currency}</span>
      <span>{stockExchange}</span>
      <span>{exchangeShortName}</span>
    </footer>
  </div>
);

export default CryptoCurrency;
