import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '../../components/NotFound/NotFound';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <NotFound />
    </Router>,
  );
  getByTestId = component.getByTestId;
});

it('renders the NotFound component', () => {
  const component = render(
    <Router>
      <NotFound />
    </Router>,
  );

  expect(component).toMatchSnapshot();
});

test('should render NotFound component with correct text', () => {
  const footerEl = getByTestId('not-found');

  expect(footerEl.textContent).not.toBe('© 2021, All Rights Reserved');
});

test('should render NotFound component with correct text', () => {
  const footerEl = getByTestId('not-found');

  expect(
    footerEl.textContent.includes(
      'The page you are trying to view does not exits',
    ),
  ).toBe(true);
});
