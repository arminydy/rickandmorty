import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { CardTextProps } from '../models';

const Container = styled.div`
  display: flex;
  align-items: baseline;
  flex: 1;
  margin-bottom: 1rem;
`;
const Bold = styled.span`
  font-weight: 500;
  margin-right: 8px;
`;
const StyledTypography = styled(Typography)`

`;

const CardText: React.FC<CardTextProps> = (props: CardTextProps): React.ReactElement<void> => {
  const { value, label } = props;
  return (
    <Container>
      <StyledTypography>
      <Bold>{label}:</Bold>
      </StyledTypography>
      <StyledTypography>
        {value}
      </StyledTypography>
    </Container>
  );
}

export default CardText;
