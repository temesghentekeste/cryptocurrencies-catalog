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
        id={'BitCoin'}
        symbol="BitCoin"
        name="BitCoin"
        price={1.25}
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
      />
    </Router>
  );
  getByTestId = component.getByTestId;
});

it('renders the CryptoCurrency component', () => {
  const component = renderer
    .create(
      <Router>
        <CryptoCurrency
          id={'BitCoin'}
          symbol="BitCoin"
          name="BitCoin"
          price={1.25}
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
        />
      </Router>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
