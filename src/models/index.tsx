export interface ReferenceProps {
  name: string;
  url: string;
}
export interface CharacterSearchResultProps {
  info: CharacterInfoPaginationProps;
  results: CharacterProps[];
}

export interface CharacterInfoPaginationProps {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}
export interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  episode: string[];
  url: string;
  created: string;
  origin: ReferenceProps;
  location: ReferenceProps;
};
export interface PaginationProps {
  currentPage: number;
  total: number;
}
export interface CardTextProps {
  label: string;
  value?: string | string[];
  isLoading?: boolean;
}
export interface LocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string[];
  created: string;
}
export interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
  url: string;
  created: string;
}
export interface SearchServerInterface {
  searchCharacter: (name?: string, page?: number) => Promise<CharacterSearchResultProps>;
  getEpisodes: (urls: string[]) => Promise<EpisodeProps[]>;
  getLocation: (url: string) => Promise<LocationProps>;
}