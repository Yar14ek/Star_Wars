import Servisec from '../servisec/servis.js';

export const GET_ALL_PEOPLE = 'GET_ALL_PEOPLE';
// export const GET_ID = 'GET_ID';
export const GET_PERSONS = 'GET_PERSONS';
// export const GET_SHIPS = 'GET_SHIPS';

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

// export function getId(id) {
//   return (dispatch) => {
//     dispatch({
//       type: GET_ID,
//       payload: id,
//     });
//   };
// }

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

// export function getShips(id) {
//   return async (dispatch) => {
//     await servisec
//       ._getStarShip(id)
//       .then((res) => {
//         dispatch({
//           type: GET_SHIPS,
//           payload: res,
//         });
//       })
//       .catch((err) => new Error(err));
//   };
// }
