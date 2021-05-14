import {render, fireEvent, screen} from '@testing-library/react';

import Home from '../pages/Home';

it('it should render Home component', () => {
  render(<Home />);
  const title = screen.getByText(/Wubba Lubba Dub-Dub!/i);
  expect(title).toBeInTheDocument();
});
