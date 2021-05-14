import { useState, useEffect, useContext } from 'react';

import { EpisodeProps } from '../models';
import { ApiContext } from '../contexts';

export const useEpisode = (urls: string[]): EpisodeProps[] | undefined => {
  const [episods, setEpisods] = useState<EpisodeProps[]>([]);
  const service = useContext(ApiContext);
  useEffect(() => {
    service?.getEpisodes(urls)
    .then((res) => {
      setEpisods(res);
    })
  }, [urls, service]);

  return episods;
}