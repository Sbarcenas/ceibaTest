import {UPDATE_USER} from '../types';

export const _SET_USER = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: data,
  });
};
