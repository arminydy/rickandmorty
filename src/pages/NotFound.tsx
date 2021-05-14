import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import BannerPhoto from '../assets/rickandmorty.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;
const StyledTypography = styled(Typography)`
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  .leftButton {
    margin-right: 1rem;
  }
`;

const NotFound: React.FC = (): React.ReactElement<void> => {
  const history = useHistory();

  return (
    <Container>
      <Image src={BannerPhoto} alt="banner" />
      <StyledTypography variant="h2">No Result Found</StyledTypography>
      <ButtonWrapper>
        <Button
          className="leftButton"
          variant="contained"
          disableElevation
          onClick={() => history.push('/character')}
        >
          Show me everything
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => history.push('/')}
        >
          Search again
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default NotFound;
