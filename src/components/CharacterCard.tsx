import React, { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { EpisodeProps, LocationProps } from '../models';
import CardText from '../components/CardText';
import axios from 'axios';

import { useEpisode } from '../hooks/useEpisode';

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 300px;
    width: 300px;
  }
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


// const CharacterCard: React.FC = (props?: any): React.ReactElement<void> => {
// const CharacterCard: FC<any> = (props: CharacterType): React.ReactElement<void> => {
  const CharacterCard: React.FC<any> = (props): React.ReactElement<void> => {
  const { character } = props;
  const [locationInfo, setLocationInfo] = useState<LocationProps>();
  const [isLoadingEpisodeData, setIsLoadingEpisodeData] = useState<boolean>(true);
  const [isLoadingLocationData, setIsLoadingLocationData] = useState<boolean>(true);
  const getEpisodes: EpisodeProps | undefined = useEpisode(character?.episode);

  const useMemoEpisode = useMemo(() => {
    setIsLoadingEpisodeData(false);
    return getEpisodes;
  }, [getEpisodes])

  useEffect(() => {
    axios.get<LocationProps>(character?.location?.url)
      .then((res) => {
        setLocationInfo(res.data)
      })
      .catch(e => console.error(e))
      .finally(() => setIsLoadingLocationData(false));
  }, [character?.location?.url])

  return (
    <StyledCard>
      <StyledCardMedia
        image={character?.image}
        title={character?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {character?.name}
        </Typography>
        <CardText label="Species" value={character?.species} />
        <CardText label="Gender" value={character?.gender} />
        <CardText label="Origin" value={character?.origin?.name} />
        <CardText label="Status" value={character?.status} />
        <CardText label="Chapters" value={useMemoEpisode?.name || 'Unknown'} isLoading={isLoadingEpisodeData}/>
        <CardText label="Episode" value={useMemoEpisode?.episode} isLoading={isLoadingEpisodeData}/>
        <CardText label="Air date" value={useMemoEpisode?.air_date} isLoading={isLoadingEpisodeData}/>
        <CardText label="Location" value={character?.location?.name} />
        <CardText label="Dimension" value={locationInfo?.dimension || 'Unknown'} isLoading={isLoadingLocationData} />
        <CardText label="Residents" value={String(locationInfo?.residents?.length)} isLoading={isLoadingLocationData}/>
        <CardText label="Type" value={locationInfo?.type || 'Unknown'} isLoading={isLoadingLocationData}/>
      </CardContent>
    </StyledCard>
  );
}

export default CharacterCard;
