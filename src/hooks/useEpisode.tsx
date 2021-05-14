import { useState, useEffect } from 'react';
import axios from 'axios';
import { EpisodeProps } from '../models';

export const useEpisode = (urls: string[]): EpisodeProps | undefined => {
  const [episods, setEpisods] = useState<EpisodeProps>();
  useEffect(() => {
    Promise.all(
      urls.map((url: string) => axios.get<EpisodeProps>(url).then(
        (res) => {
          setEpisods(res.data)
        })
        .catch(e => console.error(e))
      )
    );
  }, [urls]);

  return episods;
}