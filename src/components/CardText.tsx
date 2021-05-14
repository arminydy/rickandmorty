import React from 'react';
import styled from 'styled-components';
import { Typography, LinearProgress } from '@material-ui/core';

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
const StyledLinearProgress = styled(LinearProgress)`
  width: 180px;
`;

const CardText: React.FC<CardTextProps> = (props: CardTextProps): React.ReactElement<void> => {
  const { value, label, isLoading } = props;
  return (
    <Container>
      <Typography>
      <Bold>{label}:</Bold>
      </Typography>
      <Typography variant="body2">
      {isLoading ? <StyledLinearProgress /> : value}
      </Typography>
    </Container>
  );
}

export default CardText;
