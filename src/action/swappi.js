import Servisec from '../servisec/servis.js';

export const GET_ALL_PEOPLE = 'GET_ALL_PEOPLE';
export const GET_PERSON = 'GET_PERSON';

const servisec = new Servisec();

export function getAllPeople(page = 1) {
  return async (dispatch) => {
    await servisec
      ._getAllPeople(page)
      .then((res) => {
        dispatch({
          type: GET_ALL_PEOPLE,
          payload: res,
        });
      })
      .catch((err) => new Error(err));
  };
}

export function getPerson(id) {
  return async (dispatch) => {
    await servisec
      ._getPerson(id)
      .then((res) => {
        dispatch({
          type: GET_PERSON,
          payload: res,
        });
      })
      .catch((err) => new Error(err));
  };
}
