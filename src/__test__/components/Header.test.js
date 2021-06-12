import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/Header/Header';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <Header handleFilter={() => 'Header'} />
    </Router>
  );
  getByTestId = component.getByTestId;
});

it('renders the Header component', () => {
  const component = renderer
    .create(
      <Router>
        <Header handleFilter={() => 'Header'} />
      </Router>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});

test('should render Header component with correct cryptocurrencies button text', () => {
  const headerEl = getByTestId('header');

  expect(headerEl.textContent.includes('Cryptocurrencies')).toBe(true);
});

test('should render Header component with correct trending coins button text', () => {
  const headerEl = getByTestId('header');

  expect(headerEl.textContent.includes('Trending')).toBe(true);
});
