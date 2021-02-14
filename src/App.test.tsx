import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';


describe('<App />', () => {
  test('renders the login form if there is no authentication', () => {
    const tree: RenderResult = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const { container } = tree;
    expect(container).toMatchSnapshot();
  })
});
