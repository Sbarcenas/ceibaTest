import {CLEAR_ERRORS, GET_ERRORS, RESET_SESSION} from '../types';

const initialState = {
  msg: {},
  active: false,
  status: null,
  title: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return state;
    case RESET_SESSION:
      return initialState;
    default:
      return state;
  }
}
