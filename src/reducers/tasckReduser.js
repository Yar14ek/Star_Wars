import { GET_ALL_PEOPLE, GET_PERSONS } from '../action/swappi';
const initialState = {
  next_Page: '',
  prev_Page: '',
  people_List: [],
  person: {},
};

export function tasckReduser(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PEOPLE:
      const { next_Page, prev_Page, people_List } = action.payload;
      return {
        ...state,
        next_Page,
        prev_Page,
        people_List,
      };
    case GET_PERSONS:
      return {
        ...state,
        person: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}