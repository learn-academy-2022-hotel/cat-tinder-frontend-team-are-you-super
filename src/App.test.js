import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from './App';

describe("<App />", () => {
  it("has a heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByRole("img", {
    name: /Are You Super/i
  });
  expect(heading).toBeInTheDocument();
});
})
