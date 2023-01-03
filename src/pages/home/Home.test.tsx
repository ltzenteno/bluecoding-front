import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureStore();
const store: Store<unknown, AnyAction> = mockStore({
  custom: {
    count: 0,
  },
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
