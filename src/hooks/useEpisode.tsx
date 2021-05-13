import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EpisodeProps } from '../models';

export const useEpisode = (urls: string[]): EpisodeProps | undefined => {
  const [episod, setEpisod] = React.useState<EpisodeProps>();
  React.useEffect(() => {
    Promise.all(
      urls.map((url: string) => axios.get<EpisodeProps>(url).then(
        (res) => {
          console.log('armin', res.data)
          setEpisod(res.data)
        })
      )
    )
  }, [urls]);

  return episod;
}