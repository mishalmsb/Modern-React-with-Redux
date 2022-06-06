import { Location, Season, SeasonTypes, summerSeason, winterSeason } from '../constants/season';

export const getUserGeoLocation = (): Promise<Location> => {
  return new Promise<Location>((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }: GeolocationPosition) => {
        resolve({
          lat: latitude,
          long: longitude,
        });
      },
      (err: GeolocationPositionError) => reject(err)
    );
  });
};

export const getSeasonByLatAndMonth = (lat: number, month: number): Season => {
  if (month > 2 && month < 9) return lat > 0 ? summerSeason : winterSeason;
  return lat > 0 ? winterSeason : summerSeason;
};

export const getSeasonNameByLatAndMonth = (lat: number, month: number): string => {
  if (month > 2 && month < 9) return lat > 0 ? SeasonTypes.SUMMER : SeasonTypes.WINTER;
  return lat > 0 ? SeasonTypes.WINTER : SeasonTypes.SUMMER;
};
