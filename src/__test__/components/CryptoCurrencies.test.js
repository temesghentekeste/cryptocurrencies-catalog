import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CryptoCurrencies from '../../components/CryptoCurrencies';

let getByTestId;
const cryptocurrencies = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 37228,
    market_cap: 697357700284,
    market_cap_rank: 1,
    fully_diluted_valuation: 781771069511,
    total_volume: 36090965034,
    high_24h: 37722,
    low_24h: 35855,
    price_change_24h: 568,
    price_change_percentage_24h: 1.54938,
    market_cap_change_24h: 9550372620,
    market_cap_change_percentage_24h: 1.38852,
    circulating_supply: 18732481,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 64805,
    ath_change_percentage: -42.40208,
    ath_date: '2021-04-14T11:54:46.763Z',
    atl: 67.81,
    atl_change_percentage: 54946.04803,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2021-06-11T19:11:42.024Z',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 2421.79,
    market_cap: 281497119876,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 26958848942,
    high_24h: 2500.74,
    low_24h: 2385.25,
    price_change_24h: -45.71142781,
    price_change_percentage_24h: -1.85254,
    market_cap_change_24h: -5856261241.38141,
    market_cap_change_percentage_24h: -2.038,
    circulating_supply: 116250693.499,
    total_supply: null,
    max_supply: null,
    ath: 4356.99,
    ath_change_percentage: -44.23753,
    ath_date: '2021-05-12T14:41:48.623Z',
    atl: 0.432979,
    atl_change_percentage: 561027.94295,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 86.32825805210224,
      currency: 'btc',
      percentage: 8632.825805210225,
    },
    last_updated: '2021-06-11T19:10:25.798Z',
  },
];
beforeEach(() => {
  const component = render(
    <Router>
      <CryptoCurrencies cryptoCurrencies={cryptocurrencies} />
    </Router>,
  );
  getByTestId = component.getByTestId;
});

it('renders the CryptoCurrencies component', () => {
  const component = renderer
    .create(
      <Router>
        <CryptoCurrencies cryptoCurrencies={cryptocurrencies} />
      </Router>,
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
