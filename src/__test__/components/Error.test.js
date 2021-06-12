import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from '../../components/Error/Error';

let getByTestId;

beforeEach(() => {
  const component = render(<Error />);
  getByTestId = component.getByTestId;
});

it('renders the Error component', () => {
  const component = render(<Error />);

  expect(component).toMatchSnapshot();
});

test('should render NotFound component with correct text', () => {
  const errorEl = getByTestId('error');

  expect(errorEl.textContent).toBe('Something went wrong. Please try again!');
});

test('should render NotFound component with correct text', () => {
  const errorEl = getByTestId('error');

  expect(errorEl.textContent).not.toBe('Wow you did it');
});
