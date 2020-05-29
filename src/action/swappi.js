import Servisec from '../servisec/servis.js';

export const GET_ALL_ITEMS = 'GET_ALL_PEOPLE';
export const GET_PERSONS = 'GET_PERSONS';

const servisec = new Servisec();

export function getAllItems({ root, page = 1 }) {
  return async (dispatch) => {
    await servisec
      ._getAllItems({ root, page })
      .then((res) => {
        dispatch({
          type: GET_ALL_ITEMS,
          payload: res,
        });
      })
      .catch((err) => new Error(err));
  };
}

export function getPersons(id) {
  return async (dispatch) => {
    await servisec
      ._getPerson(id)
      .then((res) => {
        dispatch({
          type: GET_PERSONS,
          payload: res,
        });
      })
      .catch((err) => new Error(err));
  };
}
