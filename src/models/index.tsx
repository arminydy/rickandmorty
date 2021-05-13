export interface ReferenceType {
  name: string;
  url: string;
}
export interface CharacterType {
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
  origin: ReferenceType;
  location: ReferenceType;
};
export interface PaginationType {
  currentPage: number;
  total: number;
}
export interface CardTextProps {
  label: string;
  value?: string;
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