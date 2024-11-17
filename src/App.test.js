import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from './components/ui/provider';
import React from 'react';


test('renders Main component content', () => {
  render(
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  );
  const mainContent = screen.getByText(/Main Component/i);
  expect(mainContent).toBeInTheDocument();
});
