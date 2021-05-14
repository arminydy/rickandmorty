import React from 'react';
import { Card } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';


const StyledSkeleton = styled(Skeleton)`
  && {
    width: 100%;
    margin-bottom: 1rem;
    &.addSpace {
    margin-top: 4rem;
    }
  }
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  margin-top: 4rem;
  flex-wrap: wrap;
`;
const StyledCard = styled(Card)`
  && {
    width: 300px;
    min-height: 625px;
    margin-bottom: 2rem;
    margin-right: 1rem;
    .buttonWrapper {
      justify-content: center;
    }
    @media only screen and (max-width: 600px) {
      margin-right: 0;
    }
  }
`;
const InnerWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Loading: React.FC = (): React.ReactElement<void> => {
  return (
    <FlexDiv>
      {Array.from(new Array(3)).map((e, index) => (
      <StyledCard key={index}>
        <Skeleton variant="rect" height={300} />
        <InnerWrapper>
          <StyledSkeleton className="addSpace" animation="wave" />
          <StyledSkeleton animation="wave" />
          <StyledSkeleton animation="wave" />
          <StyledSkeleton animation="wave" />
          <StyledSkeleton animation="wave" />
          <StyledSkeleton animation="wave" />
        </InnerWrapper>
      </StyledCard>
      ))}
    </FlexDiv>
  );
};

export default Loading;
