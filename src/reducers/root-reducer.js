import { combineReducers } from 'redux';
import { tasckReduser } from './tasckReduser.ts';

const rootReduser = combineReducers({
  tasckReduser,
});
export default rootReduser;
