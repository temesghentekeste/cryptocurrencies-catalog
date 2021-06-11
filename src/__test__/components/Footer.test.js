import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer';

let getByTestId;

beforeEach(() => {
  const component = render(<Footer />);
  getByTestId = component.getByTestId;
});

it('renders the Footer component', () => {
  const component = renderer.create(<Footer />).toJSON();

  expect(component).toMatchSnapshot();
});

test('should render Footer component with correct text', () => {
  const component = renderer.create(<Footer />).toJSON();

  const footerEl = getByTestId('footer');

  expect(footerEl.textContent).toBe('© 2021, All Rights Reserved');
});
