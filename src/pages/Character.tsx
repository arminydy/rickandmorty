import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { parse } from 'qs';

import CharacterCard from '../components/CharacterCard';
import { CharacterType, PaginationType } from '../models';


const Container = styled.div`
  width: 100%;
`;
const StyledTypography = styled(Typography)`
  && {
    margin-bottom: 3rem;
    text-align: center;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  align-item: center;
`;
const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;



const Character: React.FC = (): React.ReactElement<void> => {
  const location = useLocation();
  const history = useHistory();
  const { name, page } = parse(location.search, { ignoreQueryPrefix: true });
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    currentPage: Number(page) || 1,
    total: 1,
  });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/character/?page=${pagination.currentPage}&name=${name}`)
    .then(response => {
      setCharacters(response?.data?.results);
      const { next, pages } = response?.data?.info;
      const  UrlObject  = parse(next,{ ignoreQueryPrefix: true });
      const currentPage = UrlObject[Object.keys(UrlObject)[0]];
      setPagination({
        currentPage: currentPage ? Number(currentPage) - 1 : pages,
        total: pages,
      });
      console.log('hahah', response)
    })
  }, [pagination.currentPage, name])

  const handleChangePage = (e: any, page: number) => {
    history.push(`/character?name=${name}&page=${page}`)
    setPagination({
      currentPage: page,
      total: pagination.total
    });
  }

  return (
    <Container>
      <StyledTypography variant="h4">
        Characters
      </StyledTypography>
      <CardsWrapper>
        {characters?.length > 0 && characters.map((character: CharacterType) => (
          <CharacterCard
            key={character?.id}
            character={character}
          />
        ))}
      </CardsWrapper>
      <StyledPagination count={pagination.total} page={pagination.currentPage} onChange={handleChangePage} />
    </Container>
  );
}

export default Character;
