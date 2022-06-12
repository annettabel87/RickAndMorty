import { rootReducer, setupStore } from '../components/store/store';

export type fetchCharactersPropsType = {
  query: string;
  cardsCount: string;
  sortValue: string;
};

export type FormStateType = {
  data: IFormCard[];
};

export interface FormStateAction {
  type: string;
  payload: IFormCard;
}

export type mainStateType = {
  data: IRickAndMortyData[];
  searchValue: string;
  cardsCount: string;
  page: number;
  pages: number;
  sortValue: string;
  selectCard: IRickAndMortyData;
  isLoading: boolean;
  error: string;
};

export interface IFetchData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: IRickAndMortyData[];
}

export interface IRickAndMortyData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export type CardFieldProps = {
  searchData: IRickAndMortyData[];
};

export type paginationPropsType = {
  cardsCount: string;
  page: number;
  pages: string;
  onSelect: (value: string) => void;
};

export type EmptyProps = Record<string, never>;

export interface IAddCardData {
  addCardData: (data: IFormCard) => void;
}
export type State = {
  cardData: IFormCard[];
};

export interface IFormCard {
  id: string;
  name: string;
  surname: string;
  birth: string;
  country: string;
  gender: string;
  photo: string;
  agree: boolean;
}
export type IFormData = {
  name: string;
  surname: string;
  birth: string;
  country: string;
  gender: string;
  photo: FileList | null;
  agree: boolean;
};

export interface ICardData {
  id: number;
  name: string;
  price: number;
  age: string;
  details: number;
}

export interface Store {
  [key: string]: string;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
