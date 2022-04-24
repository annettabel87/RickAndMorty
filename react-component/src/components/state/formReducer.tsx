import { IFormCard } from '../FormPage/Form/Form';

type FormStateType = {
  data: IFormCard[];
};
export const formState: FormStateType = {
  data: [],
};
export const ADD_CARD = 'Add_cards';

export interface FormStateAction {
  type: string;
  payload: IFormCard;
}
export const formReducer = (formstate: FormStateType, action: FormStateAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CARD:
      return { ...formstate, data: [...formstate.data, { ...payload }] };
    default:
      return formstate;
  }
};
