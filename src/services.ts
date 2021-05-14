import {
  CharacterSearchResultProps,
  LocationProps,
  EpisodeProps,
  SearchServerInterface
} from "./models/index";

import axios from "axios";


export class APIService implements SearchServerInterface {
  constructor(protected url: string) {}

  async searchCharacter(name?: string, page?: number):Promise<CharacterSearchResultProps> {
    const res = await axios.get<CharacterSearchResultProps>(`${process.env.REACT_APP_API_ENDPOINT}/character/?page=${page}&name=${name}`)
    return res.data;
  }

  getEpisodes(urls: string[]) {
    return Promise.all(
      urls.map((url) => axios.get<EpisodeProps>(url).then((res) => res.data))
    );
  }

  async getLocation(url: string) {
    const res = await axios.get<LocationProps>(url);
    return res.data;
  }
}

