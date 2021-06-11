import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '../../components/NotFound';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <NotFound />
    </Router>
  );
  getByTestId = component.getByTestId;
});

it('renders the NotFound component', () => {
  const component = render(
    <Router>
      <NotFound />
    </Router>
  );

  expect(component).toMatchSnapshot();
});
