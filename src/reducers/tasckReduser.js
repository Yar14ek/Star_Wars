import { GET_ALL_PEOPLE, GET_PERSON } from '../action/swappi';
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
    case GET_PERSON:
      console.log('action.payload :>> ', action.payload);
      const {
        eye_color,
        homeworld,
        starships,
        name,
        birth_year,
      } = action.payload;
      return {
        ...state,
        person: {
          name,
          eye_color,
          homeworld,
          starships,
          birth_year,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
