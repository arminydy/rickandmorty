import React, { useContext, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'qs';
import { ApiContext } from '../contexts';

import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import NotFound from './NotFound';

import { CharacterProps, PaginationProps } from '../models';

const Container = styled.div`
  width: 100%;
`;
const StyledTypography = styled(Typography)`
  && {
    text-align: center;
    flex: 1;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
`;
const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: center;
`;


const Character: React.FC = (): React.ReactElement<void> => {
  const location = useLocation();
  const history = useHistory();
  const service = useContext(ApiContext);
  const { name = '', page } = parse(location.search, { ignoreQueryPrefix: true });
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<PaginationProps>({
    currentPage: Number(page) || 1,
    total: 1,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    service?.searchCharacter(String(name), pagination.currentPage)
    .then(response => {
      setCharacters(response?.results);
      const { next, pages } = response?.info;
      const  UrlObject  = parse(String(next),{ ignoreQueryPrefix: true });
      const currentPage = UrlObject[Object.keys(UrlObject)[0]];
      setPagination({
        currentPage: currentPage ? Number(currentPage) - 1 : pages,
        total: pages,
      });
    }).catch(e => console.error(e))
    .finally(() => setIsLoading(false));
  }, [pagination.currentPage, name, service])

  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    history.push(`/character?name=${name}&page=${page}`)
    setPagination({
      currentPage: page,
      total: pagination.total
    });
    setIsLoading(true);
  }

  if (characters?.length === 0 && !isLoading) {
    return <NotFound />;
  }

  return (
    <Container>
      <HeaderWrapper>
        <IconButton onClick={() => history.push('/')}>
          <ArrowBackIos /> Home
        </IconButton>
        <StyledTypography variant="h4">
          Characters
        </StyledTypography>
      </HeaderWrapper>
      {isLoading ? <Loading /> :
        <Fragment>
          <CardsWrapper>
            {characters?.length > 0 && characters.map((character: CharacterProps) => (
              <CharacterCard
                key={character?.id}
                character={character}
              />
            ))}
          </CardsWrapper>
          <StyledPagination count={pagination.total} page={pagination.currentPage} onChange={handleChangePage} />
        </Fragment>
      }
    </Container>
  );
}

export default Character;
