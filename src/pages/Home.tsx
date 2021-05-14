import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import BannerPhoto from '../assets/rickandmorty.png';
import SearchBox from '../components/SearchBox';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const StyledTypography = styled(Typography)`
  && {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Home: React.FC = (): React.ReactElement<void> => {
  return (
    <Container>
      <StyledTypography variant="h4">
        Wubba Lubba Dub-Dub!
      </StyledTypography>
      <Image src={BannerPhoto} alt="banner" />
      <SearchBox />
    </Container>
  );
}

export default Home;
