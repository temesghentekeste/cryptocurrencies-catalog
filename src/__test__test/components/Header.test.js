import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/Header/';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <Header
        handleFilter={() => {
          console.log('testing...');
        }}
      />
    </Router>
  );
  getByTestId = component.getByTestId;
});

it('renders the Header component', () => {
  const component = renderer
    .create(
      <Router>
        <Header
          handleFilter={() => {
            console.log('testing...');
          }}
        />
      </Router>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
