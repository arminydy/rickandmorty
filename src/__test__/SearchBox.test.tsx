import {render, fireEvent} from '@testing-library/react';

import SearchBox from '../components/SearchBox';

it('it should update input box on SarchBox component', () => {
  const component = render(<SearchBox />);
  const input = component.getByTestId('input-test');
  expect(input).toBeInTheDocument();
  fireEvent.change(component.getByRole("textbox"), {target: {value: 'Search by characterSearch by character' } } )

  expect(input.textContent).toBe("Search by characterSearch by character")
})