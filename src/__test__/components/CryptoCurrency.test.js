import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CryptoCurrency from '../../components/CryptoCurrency';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <CryptoCurrency
        id="Bitcoin"
        symbol="btc"
        name="Bitcoin"
        price={37255}
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
      />
    </Router>,
  );
  getByTestId = component.getByTestId;
});

it('renders the CryptoCurrency component', () => {
  const component = renderer
    .create(
      <Router>
        <CryptoCurrency
          id="Bitcoin"
          symbol="btc"
          name="Bitcoin"
          price={37255}
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
        />
      </Router>,
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});

test('should render CryptoCurrency component with correct name', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-name');

  expect(cryptoCurrencyEl).toHaveTextContent('Bitcoin');
});

test('should render CryptoCurrency component with correct name', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-name');

  expect(cryptoCurrencyEl).not.toHaveTextContent('eth');
});

test('should render CryptoCurrency component with correct price', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-price');

  expect(cryptoCurrencyEl).toHaveTextContent('$37255');
});

test('should render CryptoCurrency component with correct symbol', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-symbol');

  expect(cryptoCurrencyEl).not.toHaveTextContent('0');
});

test('should render CryptoCurrency component with correct symbol', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-symbol');

  expect(cryptoCurrencyEl).toHaveTextContent('btc');
});

test('should render CryptoCurrency component with correct symbol', () => {
  const cryptoCurrencyEl = getByTestId('cryptocurrency-symbol');

  expect(cryptoCurrencyEl).not.toHaveTextContent('eth');
});
