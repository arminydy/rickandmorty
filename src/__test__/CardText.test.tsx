import { render } from '@testing-library/react';
import CardText from '../components/CardText';

test('it should render CardText Component', () => {
  const { getByText } = render(<CardText label="test" />);
  expect(getByText(/test/i)).toBeInTheDocument();
});
