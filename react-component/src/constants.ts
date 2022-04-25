export const routers = {
  ROUTE_MAIN: '/',
  ROUTE_ABOUT: '/about',
  ROUTE_CARDS: '/cards',
  ROUTE_FORM: '/form',
  ROUTE_NOTFOUND: '*',
};

export const validateConstants = {
  MIN_LENGTH_NAME: 2,
};
export const apiConstants = {
  baseUrl: 'https://rickandmortyapi.com/api',
  characterUrl: 'https://rickandmortyapi.com/api/character',
  locationUrl: 'https://rickandmortyapi.com/api/location',
  episodeUrl: 'https://rickandmortyapi.com/api/episode',
};

export const valueToSort = {
  NAME: 'name',
  NAME_REVERSE: 'name-reverse',
  GENDER: 'gender',
  GENDER_REVERSE: 'gender-reverse',
};
