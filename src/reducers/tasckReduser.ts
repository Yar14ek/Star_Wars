import { GET_ALL_ITEMS, GET_PERSONS } from '../action/swappi';

// type ActionType = {
//   type: string;
// payload: {
//   next_Page: number;
//   prev_Page: number;
//   item_List: Array<object>;
// };
// };

export interface PersonType {
  birth_year: any;
  name: any;
  starships?: any;
  homeworld: any;
  eye_color: any;
}
// export type PersonType = {
//   birth_year: string | null;
//   name: string | null;
//   starships?: Array<string> | null;
//   homeworld: object | null;
//   eye_color: string | null;
// };

export type InitialStateType = {
  next_Page: number | null;
  prev_Page: number | null;
  present_Page: number;
  item_List: Array<object> | null;
  person: PersonType | null;
};

const initialState: InitialStateType = {
  next_Page: null,
  prev_Page: null,
  present_Page: 1,
  item_List: null,
  person: null,
};

export function tasckReduser(
  state = initialState,
  action: any
): InitialStateType {
  //не уверен как правильно типизировать action.payload . Сюда приходят разные obj
  switch (action.type) {
    case GET_ALL_ITEMS:
      let { next_Page, prev_Page, item_List } = action.payload;
      const present_Page = prev_Page ? +prev_Page + 1 : 1;
      return {
        ...state,
        next_Page,
        prev_Page,
        present_Page,
        item_List,
      };
    case GET_PERSONS:
      console.log('action.payload :>> ', action.payload);
      const person = action.payload;
      return {
        ...state,
        person,
      };
    default:
      return {
        ...state,
      };
  }
}
