import { render } from '@testing-library/react';
import CharacterCard from '../components/CharacterCard';

test('it should render CharacterCard component', async () => {
  const characterProps = {
    "id": 466,
    "name": "SEAL Team Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth",
        "url": ""
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/466.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/466",
    "created": "2018-05-22T16:23:24.470Z"
  }

  const { getByTestId, getByText } = await render(<CharacterCard character={characterProps} />);
  const div = await getByTestId('test-name');
  expect(div).toHaveTextContent('SEAL Team Rick');
  expect(getByText(/Male/i)).toBeInTheDocument();
  expect(getByText(/Citadel of Ricks/i)).toBeInTheDocument();
  expect(getByText(/Earth/i)).toBeInTheDocument();
  expect(getByText(/Human/i)).toBeInTheDocument();
  expect(getByText(/Dead/i)).toBeInTheDocument();
});