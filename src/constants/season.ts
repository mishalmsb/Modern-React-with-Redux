export interface Location {
  lat: number;
  long: number;
}

export interface Season {
  name: string;
  icon: string;
  seasonMessage: string;
}

export enum SeasonTypes {
  SUMMER = 'summer',
  WINTER = 'winter',
}

export enum SeasonMessageTypes {
  SUMMER = "Let's hit the beach!",
  WINTER = "Burr, it's chilly!",
}

export enum SeasonIconTypes {
  SUMMER = 'sun icon',
  WINTER = 'snowflake icon',
}

export const summerSeason: Season = {
  name: SeasonTypes.SUMMER,
  icon: SeasonIconTypes.SUMMER,
  seasonMessage: SeasonMessageTypes.SUMMER,
};

export const winterSeason: Season = {
  name: SeasonTypes.WINTER,
  icon: SeasonIconTypes.WINTER,
  seasonMessage: SeasonMessageTypes.WINTER,
};

export interface SeasonConfig {
  [key: string]: Season;
}

export const seasonConfig: SeasonConfig = {
  [SeasonTypes.SUMMER]: { ...summerSeason },
  [SeasonTypes.WINTER]: { ...winterSeason },
};
