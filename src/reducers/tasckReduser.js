import { GET_ALL_ITEMS, GET_PERSONS } from '../action/swappi';
const initialState = {
  next_Page: '',
  prev_Page: '',
  present_Page: '',
  item_List: [],
  person: {},
};

export function tasckReduser(state = initialState, action) {
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
