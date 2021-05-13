import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { CharacterType, EpisodeProps, LocationProps } from '../models';
import CardText from '../components/CardText';
import axios from 'axios';

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 300px;
    width: 300px;
  }
`;
const StyledCard = styled(Card)`
  && {
    width: 300px;
    min-height: 400px;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;


// const CharacterCard: React.FC = (props?: any): React.ReactElement<void> => {
// const CharacterCard: FC<any> = (props: CharacterType): React.ReactElement<void> => {
  const CharacterCard: FC<any> = (props): React.ReactElement<void> => {
  const { character } = props;
  const [episod, setEpisod] = React.useState<EpisodeProps>();
  const [locationInfo, setLocationInfo] = React.useState<LocationProps>();
  React.useEffect(() => {
    Promise.all(
      character?.episode?.map((url: string) => axios.get<EpisodeProps>(url).then(
        (res) => {
          console.log('armin', res.data)
          setEpisod(res.data)
        })
      )
    )
  }, [character?.episode]);

  React.useEffect(() => {
    axios.get<LocationProps>(character?.location?.url)
      .then((res) => {
        console.log('res location ', res.data)
        setLocationInfo(res.data)
      })

  }, [character?.location?.url])

  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={character?.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character?.name}
          </Typography>
          <CardText label="Species" value={character?.species} />
          <CardText label="Gender" value={character?.gender} />
          <CardText label="Origin" value={character?.origin?.name} />
          <CardText label="Chapters" value={episod?.name || 'Unknown'} />
          {/* <div>Origin/Location</div> */}
          <CardText label="Location" value={character?.location?.name} />
          <CardText label="Dimension" value={locationInfo?.dimension} />
          <CardText label="Residents" value={String(locationInfo?.residents?.length)} />
          <CardText label="Type" value={locationInfo?.type} />

        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default CharacterCard;
